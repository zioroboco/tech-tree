export type Node = keyof typeof nodes
export type Edge = { from: Node; to: Node }

const nodes = {
  "Get it done": null,
  "More stuff": null,
  "Winning": null,
  "Cool beans": null,
}

const edges: Edge[] = [
  { from: "Get it done", to: "More stuff" },
  { from: "More stuff", to: "Winning" },
  { from: "More stuff", to: "Cool beans" },
]

export const graph = { nodes, edges }
