import React, { useRef, useEffect } from "react";

function NavigationBar({ home, about, projects, contact, active, setActive }) {
  const homeDivRef = useRef();
  const aboutDivRef = useRef();
  const projectsDivRef = useRef();
  const contactDivRef = useRef();

  useEffect(() => {
    isActive();
  }, [active]);

  const isActive = () => {
    if (active) {
      const homeDiv = homeDivRef.current;
      const aboutDiv = aboutDivRef.current;
      const projectsDiv = projectsDivRef.current;
      const contactDiv = contactDivRef.current;
      switch (active) {
        case "Home":
          enable(homeDiv)
          disable(aboutDiv)
          disable(projectsDiv)
          disable(contactDiv)
          break;
        case "About":
          disable(homeDiv)
          enable(aboutDiv)
          disable(projectsDiv)
          disable(contactDiv)
          break;
        case "Projects":
          disable(homeDiv)
          disable(aboutDiv)
          enable(projectsDiv)
          disable(contactDiv)
          break;
        case "Contact":
          disable(homeDiv)
          disable(aboutDiv)
          disable(projectsDiv)
          enable(contactDiv)
          break;
        default:
          break;
      }
    }
  };

  const enable = (refDiv) => {
    refDiv.classList.remove("text-gray-900");
    refDiv.classList.remove("text-white");
    refDiv.classList.add("text-white");
  };

  const disable = (refDiv) => {
    refDiv.classList.remove("text-gray-900");
    refDiv.classList.remove("text-white");
    refDiv.classList.add("text-gray-900");
  };

  const homeClick = () => {
    window.scrollTo({ behavior: "smooth", top: home.current.offsetTop });
  };

  const aboutClick = () => {
    window.scrollTo({ behavior: "smooth", top: about.current.offsetTop });
  };

  const projectsClick = () => {
    window.scrollTo({ behavior: "smooth", top: projects.current.offsetTop });
  };

  const contactClick = () => {
    window.scrollTo({ behavior: "smooth", top: contact.current.offsetTop });
  };

  return (
    <div id="container" className={"flex justify-center top-[40%] left-10 fixed h-auto w-20 bg-black rounded-full z-20"}>
      <div id="navbar-items" className="grid place-items-center font-bold text-[32px] bg-black py-10">
        <div className="cursor-pointer text-white " ref={homeDivRef} onClick={homeClick}>
          •
        </div>
        <div className="cursor-pointer text-gray-900" ref={aboutDivRef} onClick={aboutClick}>
          •
        </div>
        <div className="cursor-pointer text-gray-900" ref={projectsDivRef} onClick={projectsClick}>
          •
        </div>
        <div className="cursor-pointer text-gray-900" ref={contactDivRef} onClick={contactClick}>
          •
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
