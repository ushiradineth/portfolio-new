import React, { useEffect, useRef, useCallback } from "react";
import { useInView } from "react-intersection-observer";

export default function About({ scrollRef, setActive, view, viewRef }) {
  const ref = useRef();

  const setRefs = useCallback(
    (node) => {
      ref.current = node;
      scrollRef.current = node;
      view(node);
    },
    [view]
  );

  useEffect(() => {
    const aboutNode = ref.current;
    if (viewRef) {
      setActive("About");
      aboutNode.classList.add("animate-fadeIn");
    } else {
      aboutNode.classList.remove("animate-fadeIn");
      aboutNode.classList.add("opacity-0");
    }
  }, [setActive, viewRef]);

  return (
    <div id="About" ref={setRefs} className={"flex flex-col items-center mb-[60px]"}>
      <div className="flex justify-center font-bold text-[48px] tracking-[0.315em] mt-[60px]">ABOUT ME</div>
      <div className="h-[757px] w-[1169px] mt-[75px] grid grid-col-2 gap-[139px] grid-flow-col place-content-start">
        <div>
          <div id="description" className="grid grid-flow-row h-[338px] w-[511px] text-[20px] mt-[69px] font-medium text-center">
            <div>Hi! I’m Ushira Dineth, an undergraduate based in Sri Lanka.</div>
            <div>Currently, I have 3+ years of experience with programming and 1 year of experience with web development.</div>
            <div>I would like to describe myself as a highly versitile and adaptive person who enjoy working in a team or independently</div>
          </div>
          <div id="technologies" className="font-medium text-[32px] tracking-[0.315em] mt-[95px] flex justify-center">
            MY TECHNOLOGIES
          </div>
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
        <div id="image" className="grid place-items-center w-[523px] h-[757px] bg-[#D9D9D9]">
          <h1 className="font-bold text-[20px]">IMAGE</h1>
        </div>
      </div>
    </div>
  );
}
