import React from 'react'

function NavigationBar({ home, about, projects, contact }) {
   return (
    <div className="flex justify-center fixed w-full h-10 top-0 motion-reduce">
      <div id="navbar" className={"flex justify-center top-0 bg-white h-auto pl-[129px] pr-[134.3px] fixed w-full opacity-0 hover:opacity-100 hover:motion-safe:animate-nav-animation"}>
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