import { createRoot } from "react-dom/client"
import  Header  from "./components/header.jsx"

const root = createRoot(document.getElementById("root"))

root.render(
  <section>
    <Header/>
    <h1>Fun facts about react</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K stars on GitHub</li>
      <li>Is maintained by meta</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </section>
)