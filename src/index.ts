import cytoscape from "cytoscape"

import { createContainer } from "./container"
import { elements } from "./elements"

const container = createContainer(document)

cytoscape({
  container,
  elements,
  layout: {
    name: "grid",
    rows: 1,
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
