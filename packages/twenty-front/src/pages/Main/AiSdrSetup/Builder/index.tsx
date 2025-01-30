import React, { useCallback, useEffect, useState } from 'react';
import ReactFlow, {
  Background,
  Controls,
  Edge,
  addEdge,
  useEdgesState,
  useNodesState,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { v4 as uuidv4 } from 'uuid';

import {
  useAppDispatch,
  useAppSelector,
} from '../../../../hooks/redux/useStore';
import { automationSelector } from '../../../../store/Automation';
import AisdrNode from './AisdrNode';
// import Switch from "src/components/base/Switch";
import { useForm, useWatch } from 'react-hook-form';
import AisdrEdge from './AisdrEdge';

type Props = {
  setCurrentTab: (value: number) => void;
};

// Utility function to format date
const formatDate = () =>
  new Date().toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  });

const initialNodeUId = uuidv4();
const prospectorNodeUId = uuidv4();
const personalizerNodeUId = uuidv4();

const linkedinNodeUId = uuidv4();
const emailNodeUId = uuidv4();

const initialEdgeId = uuidv4();
const prospectorEdgeId = uuidv4();
const personalizerEdge = uuidv4();

const linkedinEdgeId = uuidv4();
const emailEdgeId = uuidv4();

const centerX = window.innerWidth / 2;

const proOptions = { hideAttribution: true };
const nodeTypes = { aisdrNode: AisdrNode };
const edgeTypes = { edge: AisdrEdge };

const AisdrBuilder: React.FC<Props> = ({ setCurrentTab }) => {
  const dispatch = useAppDispatch();
  const { isFullScreen } = useAppSelector(automationSelector);
  const { control, watch, handleSubmit, setValue } = useForm<any>({
    defaultValues: {
      showAdvanceSwitch: false,
    },
  });
  const showAdvanceSwitch = useWatch({
    control,
    name: 'showAdvanceSwitch',
    defaultValue: false,
  });
  const initialNodes = [
    {
      id: initialNodeUId,
      position: { x: centerX - 300, y: 30 },
      dragHandle: '.drag',
      data: {
        label: 'AISDR',
        isInitialNode: true,
        isOnStep: 1,
        showAdvance: showAdvanceSwitch,
      },
      type: 'aisdrNode',
      isConnectable: false,
      parentId: null,
    },
    {
      id: prospectorNodeUId,
      position: { x: centerX - 300, y: 130 },
      dragHandle: '.drag',
      data: {
        label: 'Prospector',
        isInitialNode: false,
        isOnStep: 2,
        showAdvance: showAdvanceSwitch,
      },
      type: 'aisdrNode',
      isConnectable: false,
    },
    {
      id: personalizerNodeUId,
      position: { x: centerX - 300, y: 230 },
      dragHandle: '.drag',
      data: {
        label: 'Personalizer',
        isInitialNode: false,
        isOnStep: 3,
        showAdvance: showAdvanceSwitch,
      },
      type: 'aisdrNode',
      isConnectable: false,
    },
    {
      id: linkedinNodeUId,
      position: { x: centerX - 500, y: 330 },
      dragHandle: '.drag',
      data: {
        label: 'Linkedin',
        isInitialNode: false,
        isOnStep: 4,
        showAdvance: showAdvanceSwitch,
      },
      type: 'aisdrNode',
      isConnectable: false,
    },
    {
      id: emailNodeUId,
      position: { x: centerX - 100, y: 330 },
      dragHandle: '.drag',
      data: {
        label: 'Email',
        isInitialNode: false,
        isOnStep: 5,
        showAdvance: showAdvanceSwitch,
      },
      type: 'aisdrNode',
      isConnectable: false,
    },
  ];

  const initialEdges: Edge[] = [
    {
      id: `e-${initialEdgeId}`,
      source: initialNodeUId,
      target: prospectorNodeUId,
      style: { strokeWidth: 2 },
      type: '',
      data: {
        label: '',
      },
    },
    {
      id: `e-${prospectorEdgeId}`,
      source: prospectorNodeUId,
      target: personalizerNodeUId,
      style: { strokeWidth: 2 },
      type: '',
      data: {
        label: '',
      },
    },
    {
      id: `e-${linkedinEdgeId}`,
      source: personalizerNodeUId,
      target: linkedinNodeUId,
      style: { strokeWidth: 2 },
      type: '',
      data: {
        label: '',
      },
    },
    {
      id: `e-${emailEdgeId}`,
      source: personalizerNodeUId,
      target: emailNodeUId,
      style: { strokeWidth: 2 },
      type: '',
      data: {
        label: '',
      },
    },
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  // Initialize workflowTemplate state directly
  const [workflowTemplate, setWorkflowTemplate] = useState({
    name: formatDate(),
    tag: '',
    id: null,
    userId: null,
    flowchart: [],
    status: 'Draft',
  });

  const onNodesDelete = useCallback(
    (deletedNodes) => {
      // Function to recursively find all child nodes
      // const findChildNodes = (parentId) => {
      //   return nodes.filter(
      //     (node) =>
      //       node?.parentId === parentId ||
      //       getConnectedEdges([node], edges).some((edge) => edge.target === parentId)
      //   );
      // };
      // const nodesToDelete = new Set(deletedNodes);
      // deletedNodes.forEach((node) => {
      //   const childNodes = findChildNodes(node.id);
      //   childNodes.forEach((childNode) => nodesToDelete.add(childNode));
      // });
      // setNodes((nds) => nds.filter((node) => !nodesToDelete.has(node)));
    },
    [nodes, edges, setNodes],
  );

  const onConnect = useCallback(
    (params: any) => setEdges(addEdge(params, edges)),
    [edges],
  );

  const onNodeClick = useCallback(
    (event: any, node: any) => {
      // eslint-disable-next-line no-empty
      if (node.type === 'aisdrNode') {
      }
    },
    [nodes, setNodes, setEdges],
  );

  const setNewWorkflowTemplateName = (value: string) => {
    setWorkflowTemplate((prev) => ({ ...prev, name: value }));
  };

  // Update nodes when showAdvanceSwitch changes
  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => ({
        ...node,
        data: {
          ...node.data,
          showAdvance: showAdvanceSwitch,
        },
      })),
    );
  }, [showAdvanceSwitch, setNodes]);

  return (
    <div
      className={
        isFullScreen
          ? 'fixed inset-0 h-screen pt-30 pb-60 pr-60 w-100vw dark:bg-bodyBgColor-dark bg-bodyBgColor left-120'
          : ''
      }
    >
      <div
        className={`flex flex-col max-w-100vw ${
          isFullScreen ? 'h-[calc(100vh-68px)]' : 'h-[calc(100vh-310px)]'
        }`}
      >
        {/* Other components and divs */}
        <div
          style={{
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            position: 'absolute',
            zIndex: 0,
          }}
        >
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onNodesDelete={onNodesDelete}
            onConnect={onConnect}
            onNodeClick={onNodeClick}
            nodesConnectable={false}
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            proOptions={proOptions}
          >
            <Controls />
            <Background />
          </ReactFlow>
        </div>
      </div>
    </div>
  );
};

export default AisdrBuilder;
