import cytoscape from "cytoscape"

import { createContainer } from "./container"
import { elements } from "./elements"

const container = createContainer(document)

cytoscape.use(require("cytoscape-dagre"))

cytoscape({
  container,
  elements,
  layout: {
    name: "dagre",
  },
  style: [
    {
      selector: "node",
      style: {
        label: "data(id)",
      },
    },
  ],
})
