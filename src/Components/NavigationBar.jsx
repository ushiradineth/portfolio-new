import React from 'react'

function NavigationBar({ home, about, projects, contact }) {
  return (
    <div id="container" className={"flex justify-center top-[40%] left-10 fixed h-auto w-20 bg-black rounded-full"}>
      <div id="navbar-items" className="grid place-items-center font-bold text-[32px] text-white bg-black py-10">  
        <div className="cursor-pointer" onClick={() => { window.scrollTo({ behavior: 'smooth', top: home.current.offsetTop }) }}>•</div>
        <div className="cursor-pointer" onClick={() => { window.scrollTo({ behavior: 'smooth', top: about.current.offsetTop }) }}>•</div>
        <div className="cursor-pointer" onClick={() => { window.scrollTo({ behavior: 'smooth', top: projects.current.offsetTop }) }}>•</div>
        <div className="cursor-pointer" onClick={() => { window.scrollTo({ behavior: 'smooth', top: contact.current.offsetTop }) }}>•</div>
      </div>
    </div>
  )
}

export default NavigationBar