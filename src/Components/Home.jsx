import React from 'react'

function Home({ scrollRef }) {
   return (
      <div id="Home" ref={scrollRef} className="flex flex-col items-center pt-[46px] pb-[98px]"> 
         <div id="name" className="font-bold text-[128px]">
            <h1>USHIRA DINETH</h1>
         </div>
         <div id="title" className="font-bold text-[20px]">
            <h1>FULL STACK WEB DEVELOPER</h1>
         </div>
         <div id="spline" className="flex items-center mt-[45px]">
            <div className="flex items-center justify-center h-[586px] w-[821px] bg-[#D9D9D9]">
                  <h1 className="font-bold text-[20px]">SPLINE 3D</h1>
            </div>
         </div>
      </div>
   )
}

export default Home