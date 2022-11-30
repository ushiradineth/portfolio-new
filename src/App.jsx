import Home from "./Components/Home"
import About from "./Components/About"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"

export default function App() {
  return (
    <div className="bg-[#A48E92] h-full">
        <Home />
        <About />
        {/* <Projects />
        <Contact /> */}
    </div>
  )
}