import React from 'react'
import Project from './Project'

function Projects({ scrollRef }) {
  return (
    <div id="Projects" ref={scrollRef} className="flex flex-col items-center">
      <div className="flex justify-center font-bold text-[48px] tracking-[0.315em] mt-[60px]">PROJECTS</div>
      <div className="flex flex-row gap-[96px] mt-[75px]">
        <Project 
          preview="https://media.techeblog.com/images/funny-cat-logic.jpg" 
          name="Clonegram (On Development)" 
          caption="Instagram Replica Website" 
          description = {[
            "A website replicating Instagram",
            "Built with TypeScript, NextJS, Prisma and TailwindCSS",
            "Website hosted on Vercel and Database hosted on Railway"
          ]}
          github="https://github.com/ushiradineth/clonegram" 
          website="https://ushiradineth.github.io/?clonegram" 
        />
        <Project 
          preview="https://media.techeblog.com/images/funny-cat-logic.jpg" 
          name="Todolist" 
          caption="Todo list Application" 
          description={[
            "A Todo list Web Application",
            "Built with JavaScript, React, Tailwind, ExpressJS and MongoDB",
            "Website hosted on Railway and Database hosted on MongoDB Atlas"
          ]}
          github="https://github.com/ushiradineth/todolist" 
          website="https://ushiradineth.github.io/?todolist" 
        />
      </div>
      <div className="flex flex-row gap-[96px] mt-[50px] mb-[50px]">
        <Project 
          preview="https://media.techeblog.com/images/funny-cat-logic.jpg" 
          name="Celiao" 
          caption="Vehicle booking Android Applicaion" 
          description={[
            "A Vehicle Rental Application with User, Booking and other management systems",
            "Built with Java, Android Studio and Firebase"
          ]}
          github="https://github.com/ushiradineth/carApp" 
          website="https://github.com/ushiradineth/carApp/releases/tag/v1.0" 
        />
        <Project 
          preview="https://media.techeblog.com/images/funny-cat-logic.jpg" 
          name="Portrait" 
          caption="PHP Social media Website" 
          description={[
            "A Website with login, Post and User management similar to Instagram",
            "Built with PHP, XAMPP and MySQL"
          ]}
          github="https://github.com/ushiradineth/portraitWebsite" 
        />
      </div>
    </div>
  )
}

export default Projects