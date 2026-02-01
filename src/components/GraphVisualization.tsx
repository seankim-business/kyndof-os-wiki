/**
 * Interactive 3D Graph Visualization
 *
 * Uses react-force-graph-3d for WebGL-based entity relationship visualization
 */

import { useEffect, useRef, useState } from 'react';
import ForceGraph3D from 'react-force-graph-3d';
import type { ForceGraphMethods, NodeObject, LinkObject } from 'react-force-graph-3d';

interface GraphNode {
  id: string;
  label: string;
  type: string;
  color: string;
  size: number;
}

interface GraphLink {
  source: string;
  target: string;
  relationship: string;
}

interface GraphData {
  nodes: GraphNode[];
  links: GraphLink[];
}

interface GraphVisualizationProps {
  data: GraphData;
  basePath?: string;
}

export default function GraphVisualization({ data, basePath = '/' }: GraphVisualizationProps) {
  const graphRef = useRef<ForceGraphMethods>();
  const [selectedTypes, setSelectedTypes] = useState<Set<string>>(new Set());
  const [highlightNodes, setHighlightNodes] = useState(new Set<string>());
  const [highlightLinks, setHighlightLinks] = useState(new Set<string>());
  const [hoverNode, setHoverNode] = useState<NodeObject | null>(null);

  // Get unique entity types for filters
  const entityTypes = Array.from(new Set(data.nodes.map(n => n.type))).sort();

  // Filter graph data based on selected types
  const filteredData = {
    nodes: selectedTypes.size === 0
      ? data.nodes
      : data.nodes.filter(n => selectedTypes.has(n.type)),
    links: selectedTypes.size === 0
      ? data.links
      : data.links.filter(l => {
          const sourceNode = data.nodes.find(n => n.id === l.source);
          const targetNode = data.nodes.find(n => n.id === l.target);
          return sourceNode && targetNode &&
                 selectedTypes.has(sourceNode.type) &&
                 selectedTypes.has(targetNode.type);
        }),
  };

  // Handle node click - navigate to entity page
  const handleNodeClick = (node: NodeObject) => {
    const graphNode = node as GraphNode;
    window.location.href = `${basePath}${graphNode.id}`;
  };

  // Handle node hover
  const handleNodeHover = (node: NodeObject | null) => {
    setHoverNode(node);

    if (node) {
      const neighbors = new Set<string>();
      const linkSet = new Set<string>();

      data.links.forEach(link => {
        if (link.source === node.id) {
          neighbors.add(link.target);
          linkSet.add(`${link.source}-${link.target}`);
        }
        if (link.target === node.id) {
          neighbors.add(link.source);
          linkSet.add(`${link.source}-${link.target}`);
        }
      });

      setHighlightNodes(neighbors);
      setHighlightLinks(linkSet);
    } else {
      setHighlightNodes(new Set());
      setHighlightLinks(new Set());
    }
  };

  // Toggle type filter
  const toggleType = (type: string) => {
    const newSelected = new Set(selectedTypes);
    if (newSelected.has(type)) {
      newSelected.delete(type);
    } else {
      newSelected.add(type);
    }
    setSelectedTypes(newSelected);
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedTypes(new Set());
  };

  // Reset camera view
  const resetView = () => {
    if (graphRef.current) {
      graphRef.current.cameraPosition(
        { x: 0, y: 0, z: 1000 },
        { x: 0, y: 0, z: 0 },
        1000
      );
    }
  };

  // Type color legend map
  const typeColors: Record<string, string> = {
    departments: '#3b82f6',
    goals: '#22c55e',
    tasks: '#f97316',
    projects: '#8b5cf6',
    kpis: '#06b6d4',
    positions: '#ec4899',
    strategies: '#eab308',
    processes: '#64748b',
    meetings: '#14b8a6',
  };

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      {/* Controls Overlay */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          zIndex: 10,
          background: 'rgba(0, 0, 0, 0.8)',
          color: 'white',
          padding: '20px',
          borderRadius: '8px',
          maxWidth: '300px',
          maxHeight: '80vh',
          overflowY: 'auto',
        }}
      >
        <h3 style={{ margin: '0 0 15px 0', fontSize: '18px' }}>World Model Graph</h3>

        <div style={{ marginBottom: '15px' }}>
          <p style={{ fontSize: '12px', opacity: 0.8, margin: '0 0 10px 0' }}>
            {filteredData.nodes.length} nodes • {filteredData.links.length} links
          </p>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <button
            onClick={resetView}
            style={{
              padding: '8px 16px',
              background: '#374151',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginRight: '8px',
            }}
          >
            Reset View
          </button>
          {selectedTypes.size > 0 && (
            <button
              onClick={clearFilters}
              style={{
                padding: '8px 16px',
                background: '#374151',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Clear Filters
            </button>
          )}
        </div>

        <div>
          <h4 style={{ margin: '0 0 10px 0', fontSize: '14px' }}>Filter by Type</h4>
          {entityTypes.map(type => (
            <label
              key={type}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '8px',
                cursor: 'pointer',
                fontSize: '13px',
              }}
            >
              <input
                type="checkbox"
                checked={selectedTypes.has(type)}
                onChange={() => toggleType(type)}
                style={{ marginRight: '8px' }}
              />
              <span
                style={{
                  width: '12px',
                  height: '12px',
                  background: typeColors[type] || '#9ca3af',
                  borderRadius: '2px',
                  marginRight: '8px',
                }}
              />
              {type}
            </label>
          ))}
        </div>

        {hoverNode && (
          <div style={{ marginTop: '15px', paddingTop: '15px', borderTop: '1px solid #4b5563' }}>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>Selected Node</h4>
            <p style={{ fontSize: '12px', margin: 0 }}>
              <strong>{(hoverNode as GraphNode).label}</strong>
              <br />
              Type: {(hoverNode as GraphNode).type}
              <br />
              Connections: {highlightNodes.size}
            </p>
          </div>
        )}

        <div style={{ marginTop: '15px', paddingTop: '15px', borderTop: '1px solid #4b5563' }}>
          <p style={{ fontSize: '11px', opacity: 0.7, margin: 0 }}>
            Click node to view details
            <br />
            Drag to rotate • Scroll to zoom
          </p>
        </div>
      </div>

      {/* Back to Dashboard Link */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          zIndex: 10,
        }}
      >
        <a
          href={`${basePath}dashboard`}
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            background: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px',
            fontSize: '14px',
          }}
        >
          ← Back to Dashboard
        </a>
      </div>

      {/* 3D Graph */}
      <ForceGraph3D
        ref={graphRef}
        graphData={filteredData}
        nodeLabel={(node) => (node as GraphNode).label}
        nodeColor={(node) => {
          const graphNode = node as GraphNode;
          if (hoverNode && node.id === hoverNode.id) return '#ffffff';
          if (highlightNodes.has(node.id as string)) return '#fbbf24';
          return graphNode.color;
        }}
        nodeVal={(node) => (node as GraphNode).size}
        linkColor={(link) => {
          const linkKey = `${link.source}-${link.target}`;
          return highlightLinks.has(linkKey) ? '#fbbf24' : '#4b5563';
        }}
        linkWidth={(link) => {
          const linkKey = `${link.source}-${link.target}`;
          return highlightLinks.has(linkKey) ? 2 : 1;
        }}
        linkOpacity={0.3}
        onNodeClick={handleNodeClick}
        onNodeHover={handleNodeHover}
        enableNodeDrag={false}
        enableNavigationControls={true}
        showNavInfo={false}
      />
    </div>
  );
}
