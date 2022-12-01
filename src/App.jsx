import Home from "./Components/Home"
import About from "./Components/About"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"

export default function App() {
  let search = window.location.search 
  if(search.split("?")[1] == "portfolio"){
    window.location.replace('https://todolist-production-35cc.up.railway.app/');
  }
  
  return (
    <div className="grid place-items-center font-montserrat">
        <Home />
        <About />
        <Projects />
        <Contact />
    </div>
  )
}