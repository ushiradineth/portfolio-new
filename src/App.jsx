import React, { useRef, useEffect } from 'react'
import { useInView } from "react-intersection-observer"
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

  const home = useRef(null)
  const about = useRef(null)
  const projects = useRef(null)
  const contact = useRef(null)

  return (
    <div className="grid place-items-center font-montserrat bg-[#A48E92] scroll-smooth">
      <NavigationBar home={home} about={about} projects={projects} contact={contact} />
      <Home scrollRef={home} />
      <About scrollRef={about} />
      <Projects scrollRef={projects} />
      <Contact scrollRef={contact} />
    </div>
  )
}