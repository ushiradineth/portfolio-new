import React, { useRef } from 'react'
import NavigationBar from "./Components/NavigationBar"
import Home from "./Components/Home"
import About from "./Components/About"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"

export default function App() {
  let search = window.location.search 
  if(search.split("?")[1] == "todolist"){
    window.location.replace('https://todolist-production-35cc.up.railway.app/');
  }

  const home = useRef()
  const about = useRef()
  const projects = useRef()
  const contact = useRef()
  
  return (
    <div className="grid place-items-center font-montserrat bg-[#A48E92]">
        <NavigationBar home={home} about={about} projects={projects} contact={contact} />
        <Home scrollRef={home} />
        <About scrollRef={about} />
        <Projects scrollRef={projects} />
        <Contact scrollRef={contact} />
    </div>
  )
}