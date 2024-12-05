import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import "./App.css"
import About from "./pages/About"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default App
