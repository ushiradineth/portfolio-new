import React from 'react'

function Home() {
  return (
    <div id="Home" className="h-full">
        <div id="navbar" className="flex justify-center h-16 pt-[30px]">
            <div id="navbar-items" className="grid grid-cols-4 gap-[150px] md:gap-[150px] font-montserrat font-bold text-[32px]">
                <h1>HOME</h1>
                <h1>ABOUT ME</h1>
                <h1>PROJECTS</h1>
                <h1>CONTACT</h1>
            </div>
        </div>
        <div id="name" className="flex justify-center font-montserrat font-bold text-[128px] pt-[46px]">
            <h1>USHIRA DINETH</h1>
        </div>
        <div id="title" className="flex justify-center font-montserrat font-bold text-[20px]">
            <h1>FULL STACK WEB DEVELOPER</h1>
        </div>
        <div id="reserved" className="flex justify-center items-center font-montserrat font-bold text-[20px] h-[729px] bg-[#CEA9A9]">
            <h1>Reserved</h1>
        </div>
    </div>
  )
}

export default Home