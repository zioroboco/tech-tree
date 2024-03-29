import { ElementsDefinition, NodeDefinition, EdgeDefinition } from "cytoscape"
import { keys } from "ramda"

import { Edge, graph, root } from "./data"

const toCyNode = (id: string): NodeDefinition => ({
  data: { id },
  style: id === root ? { visibility: "hidden" } : undefined,
})

const toCyEdge = (
  id: string,
  { from: source, to: target }: Edge
): EdgeDefinition => ({
  data: { id, source, target },
})

const toCyElements = ({ nodes, edges }: typeof graph): ElementsDefinition => ({
  nodes: keys(nodes).map(toCyNode),
  edges: edges.map((edge, i) => toCyEdge(i.toString(), edge)),
})

export const elements = toCyElements(graph)
