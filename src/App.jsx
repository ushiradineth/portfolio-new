import React, { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import NavigationBar from "./Components/NavigationBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

export default function App() {
  let search = window.location.search;
  if (search.split("?")[1] == "todolist") {
    window.location.replace("https://todolist-production-35cc.up.railway.app/");
  }

  const home = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  const { ref: isHomeRef, inView: isHome } = useInView({ threshold: 0.1 });
  const { ref: isAboutRef, inView: isAbout } = useInView({ threshold: 0.1 });
  const { ref: isProjectsRef, inView: isProjects } = useInView({ threshold: 0.1 });
  const { ref: isContactRef, inView: isContact } = useInView({ threshold: 0.1 });

  const [active, setActive] = useState();

  return (
    <div className="grid place-items-center font-montserrat bg-[#A48E92] scroll-smooth">
      <NavigationBar home={home} about={about} projects={projects} contact={contact} active={active} setActive={setActive} />
      <Home scrollRef={home} setActive={setActive} view={isHomeRef} viewRef={isHome} />
      <About scrollRef={about} setActive={setActive} view={isAboutRef} viewRef={isAbout} />
      <Projects scrollRef={projects} setActive={setActive} view={isProjectsRef} viewRef={isProjects} />
      <Contact scrollRef={contact} setActive={setActive} view={isContactRef} viewRef={isContact} />
    </div>
  );
}
