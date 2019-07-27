export type Node = keyof typeof nodes
export type Edge = { from: Node; to: Node }
export const root = "root"

const nodes = {
  [root]: null,
  "Get it done": null,
  "More stuff": null,
  "Winning": null,
  "Cool beans": null,
  "Love my cat": null,
  "Huh?": null,
  "Synergy!": null,
}

const edges: Edge[] = [
  { from: root, to: "Get it done" },
  { from: "Get it done", to: "More stuff" },
  { from: "More stuff", to: "Winning" },
  { from: "More stuff", to: "Cool beans" },
  { from: root, to: "Love my cat" },
  { from: "Love my cat", to: "Huh?" },
  { from: "Cool beans", to: "Synergy!" },
  { from: "Huh?", to: "Synergy!" },
]

export const graph = { nodes, edges }
