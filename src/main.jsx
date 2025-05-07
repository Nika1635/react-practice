import { createRoot } from "react-dom/client"
import { Fragment } from "react"
import  Header  from "./components/header.jsx"
import Main from "./components/main.jsx"

const root = createRoot(document.getElementById("root"))

root.render(
  <Fragment>
    <Header />
    <Main />
  </Fragment>
)