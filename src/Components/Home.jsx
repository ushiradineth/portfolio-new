import React from 'react'

function Home() {
  return (
    <div id="Home" className="flex items-center flex-col h-[1024px] w-[1440px] bg-[#A48E92]">
        <div id="navbar-items" className="grid grid-cols-4 gap-[150px] font-bold text-[32px] mt-[30px]">
            <h1>HOME</h1>
            <h1>ABOUT ME</h1>
            <h1>PROJECTS</h1>
            <h1>CONTACT</h1>
        </div>
        <div id="name" className="font-bold text-[128px] mt-[46px]">
            <h1>USHIRA DINETH</h1>
        </div>
        <div id="title" className="font-bold text-[20px]">
            <h1>FULL STACK WEB DEVELOPER</h1>
        </div>
        <div id="spline" className="flex items-center mt-[46px]">
            <div className="flex items-center justify-center h-[586px] w-[821px] bg-[#D9D9D9]">
                <h1 className="font-bold text-[20px]">SPLINE 3D</h1>
            </div>
        </div>
    </div>
  )
}

export default Home