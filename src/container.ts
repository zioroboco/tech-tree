export const createContainer = (document: Document) => {
  const container = document.createElement("div")
  container.setAttribute(
    "style",
    `
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0px;
      left: 0px;
    `
  )
  document.body.appendChild(container)
  return container
}
