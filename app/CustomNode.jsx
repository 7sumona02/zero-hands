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
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useCallback } from 'react';

const UrgentNode = ({ data }) => {
  const glowColors = [
    'shadow-[0px_0px_50px_10px_#9598FF]', // Purple
    'shadow-[0px_0px_50px_10px_#FBB2E0]', // Pink
    'shadow-[0px_0px_50px_10px_#79BCF8]', // Blue
  ];

  const colorIndex = parseInt(data.number) - 12;
  const glow = glowColors[colorIndex] || glowColors[0];

  // URL mapping for urgent nodes
  const urgentLinks = {
    '12': '/urgent/12',
    '13': '/urgent/13',
    '14': '/urgent/14'
  };

  const handleClick = useCallback(() => {
    window.open(urgentLinks[data.number] || '#', '_blank');
  }, [data.number]);

  return (
    <div 
      className={`flex justify-center items-center size-20 rounded-full bg-transparent ${glow} text-black relative cursor-pointer`}
      onClick={handleClick}
    >
      <div>
        <div>Urgent</div>
        <div className='text-center'>{data.number}</div>
      </div>
      <Handle type="target" position={Position.Left} className="!w-3 !h-3 !bg-black" />
      <Handle type="source" position={Position.Right} className="!w-3 !h-3 !bg-black" />
    </div>
  );
};

const HiringNode = ({ data }) => {
  // URL mapping for hiring nodes
  const hiringLinks = {
    'group1': '/hiring/team1',
    'group2': '/hiring/team2',
    'group3': '/hiring/team3',
    'group4': '/hiring/team4'
  };

  const handleClick = useCallback(() => {
    window.open(hiringLinks[data.group] || '#', '_blank');
  }, [data.group]);

  return (
    <div 
      className='flex justify-center items-center size-40 text-4xl rounded-full bg-transparent shadow-[0px_0px_100px_10px_#4593FF] text-black relative cursor-pointer'
      onClick={handleClick}
    >
      <div>Hiring</div>
      <Handle type="target" position={Position.Left} className="!w-3 !h-3 !bg-black" />
      <Handle type="source" position={Position.Right} className="!w-3 !h-3 !bg-black" />
    </div>
  );
};

const nodeTypes = {
  urgentNode: UrgentNode,
  hiringNode: HiringNode,
};

// Function to create a node group
const createGroup = (groupId, xOffset, yOffset) => {
  const nodes = [
    {
      id: `hiring-${groupId}`,
      type: 'hiringNode',
      position: { x: xOffset, y: yOffset },
      data: { group: `group${groupId}` },
    },
    {
      id: `urgent1-${groupId}`,
      type: 'urgentNode',
      position: { x: xOffset + 300, y: yOffset - 150 },
      data: { number: '12', group: `group${groupId}` },
    },
    {
      id: `urgent2-${groupId}`,
      type: 'urgentNode',
      position: { x: xOffset + 300, y: yOffset },
      data: { number: '13', group: `group${groupId}` },
    },
    {
      id: `urgent3-${groupId}`,
      type: 'urgentNode',
      position: { x: xOffset + 300, y: yOffset + 150 },
      data: { number: '14', group: `group${groupId}` },
    }
  ];

  const edges = [
    { id: `e1-${groupId}`, source: `hiring-${groupId}`, target: `urgent1-${groupId}`, style: { stroke: '#e9e9e9', strokeWidth: 2 } },
    { id: `e2-${groupId}`, source: `hiring-${groupId}`, target: `urgent2-${groupId}`, style: { stroke: '#e9e9e9', strokeWidth: 2 } },
    { id: `e3-${groupId}`, source: `hiring-${groupId}`, target: `urgent3-${groupId}`, style: { stroke: '#e9e9e9', strokeWidth: 2 } },
  ];

  return { nodes, edges };
};

// Create groups
const group1 = createGroup(1, 150, 200);
const group2 = createGroup(2, 900, 800);
const group3 = createGroup(3, 1500, 10);
const group4 = createGroup(4, 2000, 950);

const initialNodes = [...group1.nodes, ...group2.nodes, ...group3.nodes, ...group4.nodes];
const initialEdges = [...group1.edges, ...group2.edges, ...group3.edges, ...group4.edges];

export default function HiringFlow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div style={{ width: '150vw', height: '150vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
}