'use client'
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  Handle,
  Position,
  addEdge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useCallback } from 'react';

const nodeDefaults = {
  sourcePosition: Position.Right,
  targetPosition: Position.Left,
};

// Small Node Component with dynamic color
const SmallNode = ({ data }) => {
  // Define colors for each small node
  const nodeColors = {
    'Small1': { shadow: 'shadow-[0px_0px_50px_10px_#9598FF]', text: 'text-black' },
    'Small2': { shadow: 'shadow-[0px_0px_50px_10px_#FBB2E0]', text: 'text-black' },
    'Small3': { shadow: 'shadow-[0px_0px_50px_10px_#79BCF8]', text: 'text-black' }
  };

  const color = nodeColors[data.label] || { shadow: 'shadow-[0px_0px_50px_10px_#9598FF]', text: 'text-black' };

  return (
    <div className={`flex justify-center items-center size-20 rounded-full bg-transparent ${color.shadow} ${color.text} relative`}>
      <div className='p-10'>{data.label}</div>
      <Handle 
        type="target" 
        position={Position.Left} 
        className="!w-3 !h-3 !bg-black" 
      />
      <Handle 
        type="source" 
        position={Position.Right} 
        className="!w-3 !h-3 !bg-black" 
      />
    </div>
  );
};

// Large Node Component (size-40)
const LargeNode = ({ data }) => {
  return (
    <div className='flex justify-center items-center size-40 text-4xl rounded-full bg-transparent shadow-[0px_0px_250px_20px_#4593FF] text-black relative'>
      {data.label}
      <Handle 
        type="target" 
        position={Position.Left} 
        className="!w-3 !h-3 !bg-black" 
      />
      <Handle 
        type="source" 
        position={Position.Right} 
        className="!w-3 !h-3 !bg-black" 
      />
    </div>
  );
};

// Define node types
const nodeTypes = {
  smallNode: SmallNode,
  largeNode: LargeNode,
};

// Initial nodes with different types
const initialNodes = [
  {
    id: '1',
    type: 'largeNode',
    position: { x: 100, y: 250 },
    data: { label: 'Big' },
    ...nodeDefaults,
  },
  {
    id: '2',
    type: 'smallNode',
    position: { x: 400, y: 150 },
    data: { label: 'Small1' },
    ...nodeDefaults,
  },
  {
    id: '3',
    type: 'smallNode',
    position: { x: 400, y: 350 },
    data: { label: 'Small2' },
    ...nodeDefaults,
  },
  {
    id: '4',
    type: 'smallNode',
    position: { x: 400, y: 550 },
    data: { label: 'Small3' },
    ...nodeDefaults,
  },
];

const initialEdges = [
  { 
    id: 'e1-2', 
    source: '1', 
    target: '2',
    style: { stroke: '#e9e9e9', strokeWidth: 2 },
  },
  { 
    id: 'e1-3', 
    source: '1', 
    target: '3',
    style: { stroke: '#e9e9e9', strokeWidth: 2 },
  },
  { 
    id: 'e1-4', 
    source: '1', 
    target: '4',
    style: { stroke: '#e9e9e9', strokeWidth: 2 },
  },
];

function FlowWithCustomNodes() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((els) => addEdge({ ...params, style: { stroke: '#e9e9e9', strokeWidth: 2 } }, els)),
    [setEdges]
  );

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
}

export default FlowWithCustomNodes;