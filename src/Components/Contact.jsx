import React from 'react'
import arrow from '/src/Assets/arrow.svg'

function Contact({ scrollRef }) {
  return (
    <div id="Contact" ref={scrollRef} className="h-[282px] w-full bg-[#191A1E]">
      <div className="flex flex-col items-center">
        <a className="flex flex-row mt-[50px]" href="mailto:ushiradineth@gmail.com">
          <div className="font-bold text-[40px] text-white">USHIRADINETH@GMAIL.COM</div>
          <img src={arrow} className="ml-[11.14px]"></img>
        </a>
        <div className="flex flex-row mt-[72px] gap-[44px]">
          <div className="flex flex-col">
            <div id="contact" className="font-bold text-[10px] text-[#8E8E8E]">CONTACT DETAILS</div>
            <div className="font-bold text-[18px] text-[#C8C8C8]">+94 777 29 2424</div>
          </div>
          <div>
            <div id="socials" className="font-bold text-[10px] text-[#8E8E8E]">LINKS</div>
            <div className="flex flex-row gap-[14px]">
              <a className="font-bold text-[18px] text-[#C8C8C8]" href="https://www.linkedin.com/in/ushiradineth">LINKEDIN</a>
              <a className="font-bold text-[18px] text-[#C8C8C8]" href="https://www.github.com/ushiradineth">GITHUB</a>
              <a className="font-bold text-[18px] text-[#C8C8C8]" href="https://drive.google.com/file/d/1HEzCU4Kt4TxHVHFpxdilBAhZqny4L-TF/view?usp=sharing">CURRICULUM VITAE</a>
            </div>
          </div>
          <div>
            <div id="location" className="font-bold text-[10px] text-[#8E8E8E]">LOCATION</div>
            <div className="font-bold text-[18px] text-[#C8C8C8]">SRI LANKA</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact