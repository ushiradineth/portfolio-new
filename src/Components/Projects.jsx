import React, { useEffect, useRef, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import Project from "./Project";
import celiao from "/src/Assets/celiao.svg";

export default function Projects({ scrollRef, setActive, view, viewRef }) {
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
    const projectNode = ref.current;
    if (viewRef) {
      setActive("Projects");
      projectNode.classList.add("animate-fadeIn");
    } else {
      projectNode.classList.remove("animate-fadeIn");
      projectNode.classList.add("opacity-0");
    }
  }, [setActive, viewRef]);

  return (
    <div id="Projects" ref={setRefs} className="flex flex-col items-center w-[90%] my-[30px] 2xl:my-[60px] 2xl:px-[75px] py-[25px] 2xl:py-[75px] bg-white rounded-2xl shadow-xl white">
      <div className="flex justify-center font-bold text-[20px] 2xl:text-[48px] lg:mb-[10px] tracking-[0.315em]">PROJECTS</div>
      <div className="grid grid-flow-row 2xl:grid-flow-col gap-[25px] 2xl:gap-[96px] mt-[10px] lg:mt-[25px] 2xl:mt-[50px] 2xl:mb-[50px]">
        <Project preview="https://media.techeblog.com/images/funny-cat-logic.jpg" name="Clonegram (On Development)" caption="Instagram Replica Website" description={["A website replicating Instagram", "Built with TypeScript, NextJS, Prisma and TailwindCSS", "Website hosted on Vercel and Database hosted on Railway"]} github="https://github.com/ushiradineth/clonegram" website="https://ushiradineth.github.io/?clonegram" />
        <Project preview="https://media.techeblog.com/images/funny-cat-logic.jpg" name="Todolist" caption="Todo list Application" description={["A Todo list Web Application", "Built with JavaScript, React, Tailwind, ExpressJS and MongoDB", "Website hosted on Railway and Database hosted on MongoDB Atlas"]} github="https://github.com/ushiradineth/todolist" website="https://ushiradineth.github.io/?todolist" />
      </div>
      <div className="grid grid-flow-row 2xl:grid-flow-col gap-[25px] 2xl:gap-[96px] mt-[25px] 2xl:mt-[50px] 2xl:mb-[50px]">
        <Project preview={celiao} name="Celiao" caption="Vehicle booking Android Applicaion" description={["A Vehicle Rental Application with User, Booking and other management systems", "Built with Java, Android Studio and Firebase"]} github="https://github.com/ushiradineth/carApp" website="https://github.com/ushiradineth/carApp/releases/tag/v1.0" />
        <Project preview="https://media.techeblog.com/images/funny-cat-logic.jpg" name="Portrait" caption="PHP Social media Website" description={["A Website with login, Post and User management similar to Instagram", "Built with PHP, XAMPP and MySQL"]} github="https://github.com/ushiradineth/portraitWebsite" />
      </div>
    </div>
  );
}
