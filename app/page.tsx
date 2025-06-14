'use client'; // This is required since we're using client-side interactivity

import { useEffect, useRef } from 'react';
import { select } from 'd3-selection';
import { zoom } from 'd3-zoom';

export default function D3ZoomExample() {
  const svgRef = useRef(null);
  const width = 600;
  const height = 400;
  const numPoints = 100;
  const dataRef = useRef([]);
  const myZoomRef = useRef(null);

  useEffect(() => {
    // Initialize zoom behavior
    myZoomRef.current = zoom()
      .scaleExtent([0.25, 10])
      .on('zoom', handleZoom);

    // Set up SVG
    select(svgRef.current)
      .call(myZoomRef.current);

    // Generate initial data
    updateData();

    // Initial render
    update();
  }, []);

  function updateData() {
    dataRef.current = [];
    for (let i = 0; i < numPoints; i++) {
      dataRef.current.push({
        id: i,
        x: Math.random() * width,
        y: Math.random() * height
      });
    }
  }

  function handleZoom(e) {
    select(svgRef.current)
      .select('g')
      .attr('transform', e.transform);
  }

  function zoomIn() {
    select(svgRef.current)
      .transition()
      .call(myZoomRef.current.scaleBy, 2);
  }

  function zoomOut() {
    select(svgRef.current)
      .transition()
      .call(myZoomRef.current.scaleBy, 0.5);
  }

  function resetZoom() {
    select(svgRef.current)
      .transition()
      .call(myZoomRef.current.scaleTo, 1);
  }

  function center() {
    select(svgRef.current)
      .transition()
      .call(myZoomRef.current.translateTo, 0.5 * width, 0.5 * height);
  }

  function panLeft() {
    select(svgRef.current)
      .transition()
      .call(myZoomRef.current.translateBy, -50, 0);
  }

  function panRight() {
    select(svgRef.current)
      .transition()
      .call(myZoomRef.current.translateBy, 50, 0);
  }

  function update() {
    select(svgRef.current)
      .select('g')
      .selectAll('circle')
      .data(dataRef.current)
      .join('circle')
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
      .attr('r', 3)
      .attr('fill', 'currentColor')
      .attr('class', 'text-blue-500');
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-4">
        <svg 
          ref={svgRef} 
          width={width} 
          height={height} 
          className="border border-gray-200 rounded"
        >
          <g></g>
        </svg>

        <div className="mt-4 flex flex-wrap gap-2 justify-center">
          <button 
            onClick={zoomIn}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Zoom in
          </button>
          <button 
            onClick={zoomOut}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Zoom out
          </button>
          <button 
            onClick={resetZoom}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Reset zoom
          </button>
          <button 
            onClick={panLeft}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Pan left
          </button>
          <button 
            onClick={panRight}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Pan right
          </button>
          <button 
            onClick={center}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Center
          </button>
        </div>
      </div>
    </div>
  );
}