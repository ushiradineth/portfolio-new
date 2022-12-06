import React, { useEffect, useRef, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import arrow from "/src/Assets/arrow.svg";

export default function Contact({ scrollRef, setActive, view, viewRef }) {
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
    const contactNode = ref.current;
    if (viewRef) {
      setActive("Contact");
    } else {
    }
  }, [setActive, viewRef]);

  return (
    <div id="Contact" ref={setRefs} className="h-[139px] lg:h-[282px] w-full bg-[#191A1E]">
      <div className="flex flex-col items-center">
        <a className="flex flex-row items-center mt-[43px] lg:mt-[50px]" href="mailto:ushiradineth@gmail.com">
          <div className="font-bold text-[20px] lg:text-[40px] text-white">USHIRADINETH@GMAIL.COM</div>
          <img src={arrow} className="ml-2 lg:ml-[11.14px] h-[16px] w-[16px] lg:h-auto lg:w-auto"></img>
        </a>
        <div className="flex flex-row mt-[12px] lg:mt-[72px] gap-[20px] lg:gap-[44px]">
          <div className="flex flex-col">
            <div id="contact" className="font-bold text-[5px] lg:text-[10px] text-[#8E8E8E]">
              CONTACT DETAILS
            </div>
            <div className="font-bold text-[8px] lg:text-[18px] text-[#C8C8C8]">+94 777 29 2424</div>
          </div>
          <div>
            <div id="socials" className="font-bold text-[5px] lg:text-[10px] text-[#8E8E8E]">
              LINKS
            </div>
            <div className="flex flex-row gap-[11px] lg:gap-[14px]">
              <a className="font-bold text-[8px] lg:text-[18px] text-[#C8C8C8]" href="https://www.linkedin.com/in/ushiradineth">
                LINKEDIN
              </a>
              <a className="font-bold text-[8px] lg:text-[18px] text-[#C8C8C8]" href="https://www.github.com/ushiradineth">
                GITHUB
              </a>
              <a className="font-bold text-[8px] lg:text-[18px] text-[#C8C8C8]" href="https://drive.google.com/file/d/1HEzCU4Kt4TxHVHFpxdilBAhZqny4L-TF/view?usp=sharing">
                CURRICULUM VITAE
              </a>
            </div>
          </div>
          <div>
            <div id="location" className="font-bold text-[5px] lg:text-[10px] text-[#8E8E8E]">
              LOCATION
            </div>
            <div className="font-bold text-[8px] lg:text-[18px] text-[#C8C8C8]">SRI LANKA</div>
          </div>
        </div>
      </div>
    </div>
  );
}
