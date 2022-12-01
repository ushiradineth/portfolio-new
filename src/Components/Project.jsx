import React from 'react'
import githubIcon from '/src/Assets/github.svg'
import websiteIcon from '/src/Assets/website.svg'

function Project({ preview, name, description, github, website }) {
  return ( 
    <div id="card" className="h-[389px] w-[575px] rounded-[40px] bg-[#D9D9D9]">
      <img id="preview" className="h-[259px] w-[515px] rounded-[20px] bg-[#CEA9A9] mt-[26px] ml-[30px]" src={preview}></img>
      <div className="flex flex-row">
      <div id="description" className="text-[20px] ml-[30px]">
        <div className="font-bold mt-[21px]">{name}</div>
        <div className="font-medium">{description}</div>
      </div>
      <div id="links" className="flex flex-row mt-[32px]">
        { website ? <>
          <a href={github}><img src={githubIcon} className="h-[50px] w-[50px] ml-[195px]"></img></a>
          <a href={website}><img src={websiteIcon} className="h-[45px] w-[45px] ml-[24px]"></img></a>
        </> : <>
          <a href={github}><img src={githubIcon} className="h-[50px] w-[50px] ml-[269px]"></img></a>
        </>}
      </div>
      </div>
    </div>
  )
}

export default Project