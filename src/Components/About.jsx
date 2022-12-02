import React from 'react'

function About({ scrollRef }) {
  return (
    <div id="About" ref={scrollRef} className="flex flex-col items-center">
      <div className="flex justify-center font-bold text-[48px] tracking-[0.315em] mt-[60px]">ABOUT ME</div>
      <div className="h-[757px] w-[1169px] mt-[75px] grid grid-col-2 gap-[139px] grid-flow-col place-content-start">
        <div>
          <div id="description" className="h-[338px] w-[511px] font-normal text-[20px] mt-[69px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin aliquet scelerisque. Vivamus accumsan dapibus augue eget volutpat. Praesent pulvinar sem vel ex tristique laoreet. Maecenas eget justo at ligula efficitur rutrum sed nec enim. Nulla fringilla sit amet justo et malesuada. Sed vel eros diam. Nullam sollicitudin pharetra diam ac venenatis. Proin non arcu ipsum. Aenean sagittis congue dolor, ac semper nibh cursus vel. Curabitur et lacus laoreet, pharetra ex eget, porttitor nisl. Cras ultrices vel urna ac auctor.
          </div>
          <div id="technologies" className="font-medium text-[32px] tracking-[0.315em] mt-[95px] flex justify-center">MY TECHNOLOGIES</div>
            <div className="grid grid-flow-col place-items-center font-bold text-[20px] mt-[32px]">
              <h1 className="border-solid border-2 border-black px-3 rounded-3xl">React</h1>
              <h1 className="border-solid border-2 border-black px-3 rounded-3xl">NextJS</h1>
              <h1 className="border-solid border-2 border-black px-3 rounded-3xl">JavaScript</h1>
              <h1 className="border-solid border-2 border-black px-3 rounded-3xl">TypeScript</h1>
            </div>
            <div className="grid grid-flow-col place-items-center font-bold text-[20px] mt-[13px]">
              <h1 className="border-solid border-2 border-black px-3 rounded-3xl">TailwindCSS</h1>
              <h1 className="border-solid border-2 border-black px-3 rounded-3xl">ExpressJS</h1>
              <h1 className="border-solid border-2 border-black px-3 rounded-3xl">Python</h1>
              <h1 className="border-solid border-2 border-black px-3 rounded-3xl">Java</h1>
            </div>
            <div className="grid grid-flow-col place-items-center font-bold text-[20px] mt-[13px]">
              <h1 className="border-solid border-2 border-black px-3 rounded-3xl">SQL</h1>
              <h1 className="border-solid border-2 border-black px-3 rounded-3xl">NoSQL</h1>
              <h1 className="border-solid border-2 border-black px-3 rounded-3xl">Docker</h1>
              <h1 className="border-solid border-2 border-black px-3 rounded-3xl">Figma</h1>
              <h1 className="border-solid border-2 border-black px-3 rounded-3xl">Spline</h1>
            </div>
          </div>
        <div id="image" className="grid place-items-center w-[523px] h-[757px] bg-[#D9D9D9]"><h1 className="font-bold text-[20px]">IMAGE</h1></div>
      </div>
    </div>
  )
}

export default About