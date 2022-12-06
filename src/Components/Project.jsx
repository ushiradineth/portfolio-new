import React, { useState, useEffect, useRef, useCallback } from "react";
import githubIcon from "/src/Assets/github.svg";
import websiteIcon from "/src/Assets/website.svg";
import { useInView } from "react-intersection-observer";

function Project({ preview, name, caption, description, github, website }) {
  const [isCardClick, setCardClick] = useState(false);

  const { ref: isProjectRef, inView: isProject } = useInView({ threshold: 0.1 });

  const ref = useRef();

  const setRefs = useCallback(
    (node) => {
      ref.current = node;
      isProjectRef(node);
    },
    [isProjectRef]
  );

  useEffect(() => {
    const projectNode = ref.current;
    if (isProject) {
      projectNode.classList.remove("opacity-0");
      projectNode.classList.remove("opacity-0");
      projectNode.classList.add("animate-fadeInlate");
    } else {
      projectNode.classList.remove("animate-fadeInlate");
      projectNode.classList.add("opacity-0");
    }
  }, [isProject]);

  return (
    <>
      {!isCardClick ? (
        <div id="card" className="h-[211px] w-[313px] lg:h-[389px] lg:w-[575px] rounded-[20px] lg:rounded-[40px] bg-[#D9D9D9] cursor-pointer" ref={setRefs} onClick={() => setCardClick(!isCardClick)}>
          <img id="preview" className="h-[141px] w-[281px] lg:h-[259px] lg:w-[515px] rounded-[10px] lg:rounded-[20px] bg-white ml-[16px] lg:ml-[30px] mt-[16px] lg:mt-[26px] object-cover object-top" src={preview}></img>
          <div className="flex flex-row">
            <div id="info" className="text-[10px] lg:text-[20px] ml-[20px] lg:ml-[30px] mt-1 lg:mt-0 w-[211px] lg:w-[390px]">
              <div className="font-bold mt-[5px] lg:mt-[21px]">{name}</div>
              <div className="font-medium">{caption}</div>
            </div>
            <div id="links" className="flex flex-row mt-[12px] lg:mt-[24px]">
              {website ? (
                <>
                  <a href={github}>
                    <img src={githubIcon} className="h-[28px] w-[28px] lg:h-[50px] lg:w-[50px]"></img>
                  </a>
                  <a href={website}>
                    <img src={websiteIcon} className="h-[25px] w-[25px] lg:h-[45px] lg:w-[45px] ml-[10px] lg:ml-[24px] lg:mt-[2px]"></img>
                  </a>
                </>
              ) : (
                <>
                  <a href={github}>
                    <img src={githubIcon} className="h-[28px] w-[28px] lg:h-[50px] lg:w-[50px] ml-[40px] lg:ml-[75px]"></img>
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div id="card" className="h-auto w-[313px] lg:h-[389px] lg:w-[575px] rounded-[20px] lg:rounded-[40px] bg-[#CEA9A9] motion-safe:animate-project-animation cursor-pointer" ref={setRefs} onClick={() => setCardClick(!isCardClick)}>
          <img id="preview" className="h-[141px] w-[281px] lg:h-[259px] lg:w-[515px] rounded-[10px] lg:rounded-[20px] bg-[#CEA9A9] ml-[16px] lg:ml-[30px] mt-[16px] lg:mt-[26px] object-cover object-top" src={preview}></img>
          <div className="flex flex-row">
            <div id="info" className="text-[10px] lg:text-[20px] ml-[20px] lg:ml-[30px] lg:mt-0 w-[211px] lg:w-[390px] mb-[10px] lg:mb-[20px]">
              <div className="font-bold mt-[10px] lg:mt-[21px]">{name}</div>
              <ul className="font-medium list-disc ml-[15px] lg:ml-[30px]">
                {description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div id="links" className="flex flex-row mt-[12px] lg:mt-[24px]">
              {website ? (
                <>
                  <a href={github}>
                    <img src={githubIcon} className="h-[28px] w-[28px] lg:h-[50px] lg:w-[50px]"></img>
                  </a>
                  <a href={website}>
                    <img src={websiteIcon} className="h-[25px] w-[25px] lg:h-[45px] lg:w-[45px] ml-[10px] lg:ml-[24px] lg:mt-[2px]"></img>
                  </a>
                </>
              ) : (
                <>
                  <a href={github}>
                    <img src={githubIcon} className="h-[28px] w-[28px] lg:h-[50px] lg:w-[50px] ml-[40px] lg:ml-[75px]"></img>
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Project;
