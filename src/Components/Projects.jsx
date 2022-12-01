import React from 'react'
import Project from './Project'

function Projects() {
  return (
    <div id="Projects" className="flex items-center flex-col h-[1120px] w-[1440px] bg-[#A48E92]">
      <div className="flex justify-center font-bold text-[48px] tracking-[0.315em] mt-[60px]">PROJECTS</div>
      <div className="flex flex-row gap-[96px] mt-[75px]">
        <Project preview="/" name="Project Name" description="Project Description" github="https://www.github.com" website="https://www.github.com" />
        <Project preview="/" name="Project Name" description="Project Description" github="https://www.github.com" website="https://www.github.com" />
      </div>
      <div className="flex flex-row gap-[96px] mt-[50px]">
        <Project preview="/" name="Project Name" description="Project Description" github="https://www.github.com" website="https://www.github.com" />
        <Project preview="/" name="Project Name" description="Project Description" github="https://www.github.com" website="https://www.github.com" />
      </div>
    </div>
  )
}

export default Projects