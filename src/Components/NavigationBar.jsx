import React, { useState } from 'react'

function NavigationBar({ home, about, projects, contact }) {
	const [hover, setHover] = useState("");

   return (
    <div className="flex justify-center fixed w-full h-10 top-0" onMouseEnter={() => setHover("visible")} onMouseLeave={() => setHover("invisible")}>
      <div id="navbar" className={"flex justify-center top-0 bg-white h-auto pl-[129px] pr-[134.3px] fixed w-full "+hover}>
        <div id="navbar-items" className="grid grid-flow-col gap-[150px] font-bold text-[32px] w-fit">  
          <div className="cursor-pointer" onClick={() => { window.scrollTo({ behavior: 'smooth', top: home.current.offsetTop }) }}>HOME</div>
          <div className="cursor-pointer" onClick={() => { window.scrollTo({ behavior: 'smooth', top: about.current.offsetTop }) }}>ABOUT ME</div>
          <div className="cursor-pointer" onClick={() => { window.scrollTo({ behavior: 'smooth', top: projects.current.offsetTop }) }}>PROJECTS</div>
          <div className="cursor-pointer" onClick={() => { window.scrollTo({ behavior: 'smooth', top: contact.current.offsetTop }) }}>CONTACT</div>
        </div>
      </div>
    </div>
  )
}

export default NavigationBar