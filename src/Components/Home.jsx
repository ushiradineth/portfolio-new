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
    <div id="Home" ref={setRefs} className="flex flex-col items-center pt-[46px] pb-[98px]">
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
  );
}
