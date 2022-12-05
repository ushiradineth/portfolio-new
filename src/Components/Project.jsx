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
        <div id="card" className="h-[389px] w-[575px] rounded-[40px] bg-[#D9D9D9] cursor-pointer" ref={setRefs} onClick={() => setCardClick(!isCardClick)}>
          <img id="preview" className="h-[259px] w-[515px] rounded-[20px] bg-white ml-[30px] mt-[26px] border object-cover object-top" src={preview}></img>
          <div className="flex flex-row">
            <div id="info" className="text-[20px] ml-[30px] w-[390px]">
              <div className="font-bold mt-[21px]">{name}</div>
              <div className="font-medium">{caption}</div>
            </div>
            <div id="links" className="flex flex-row mt-[24px]">
              {website ? (
                <>
                  <a href={github}>
                    <img src={githubIcon} className="h-[50px] w-[50px]"></img>
                  </a>
                  <a href={website}>
                    <img src={websiteIcon} className="h-[45px] w-[45px] ml-[24px] mt-[2px]"></img>
                  </a>
                </>
              ) : (
                <>
                  <a href={github}>
                    <img src={githubIcon} className="h-[50px] w-[50px] ml-[75px]"></img>
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div id="card" className="h-auto w-[575px] rounded-[40px] bg-[#CEA9A9] motion-safe:animate-project-animation cursor-pointer" ref={setRefs} onClick={() => setCardClick(!isCardClick)}>
          <img id="preview" className="w-[90%] rounded-[20px] bg-[#CEA9A9] ml-[30px] mt-[26px]" src={preview}></img>
          <div className="flex flex-row">
            <div id="info" className="text-[20px] ml-[30px] mb-[20px] w-[390px]">
              <div className="font-bold mt-[21px]">{name}</div>
              <ul className="font-medium list-disc ml-[30px]">
                {description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div id="links" className="flex flex-row mt-[24px]">
              {website ? (
                <>
                  <a href={github}>
                    <img src={githubIcon} className="h-[50px] w-[50px]"></img>
                  </a>
                  <a href={website}>
                    <img src={websiteIcon} className="h-[45px] w-[45px] ml-[24px] mt-[2px]"></img>
                  </a>
                </>
              ) : (
                <>
                  <a href={github}>
                    <img src={githubIcon} className="h-[50px] w-[50px]  ml-[75px]"></img>
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
