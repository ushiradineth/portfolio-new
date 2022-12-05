import React, { useEffect, useRef, useCallback } from "react";

export default function Home({ scrollRef, setActive, view, viewRef }) {
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
    const HomeNode = ref.current;
    if (viewRef) {
      setActive("Home");
      HomeNode.classList.add("animate-fadeIn");
    } else {
      HomeNode.classList.remove("animate-fadeIn");
      HomeNode.classList.add("opacity-0");
    }
  }, [setActive, viewRef]);

  return (
    <div id="Home" ref={setRefs} className="flex flex-col items-center w-[390px] lg:w-[1440px] my-[30px] lg:my-[60px] lg:px-[75px] py-[25px] lg:py-[75px] bg-white rounded-2xl shadow-xl white">
      <div id="name" className="font-bold text-[32px] lg:text-[128px]">
        <h1>USHIRA DINETH</h1>
      </div>
      <div id="title" className="font-bold text-[20px]">
        <h1>FULL STACK WEB DEVELOPER</h1>
      </div>
      <div id="spline" className="flex items-center mt-[45px]">
        <div className="flex items-center justify-center h-[200px] w-[300px] lg:h-[600px] lg:w-[850px] bg-[#D9D9D9]">
          <h1 className="font-bold text-[20px]">SPLINE 3D</h1>
        </div>
      </div>
    </div>
  );
}
