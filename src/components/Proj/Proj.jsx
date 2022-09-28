import React from 'react'
import Projects from './Projects'
import projectOne from "../image/projectOne.png"
import Thumbnail from "../image/thumbnail.png"

const Proj = () => {
  return (
    <div>
        <section id='projects'>
            <Projects 
                title="PROJECT"
                projName = "MyPortfolio"
                projDet = "PROFILE Website."
                projDesc = "My portfolio website that represents my work that I have created, as well as my skills and experiences"
                image = {projectOne}
                thumbnail = {Thumbnail}
            /> 
        </section>
    </div>
  )
}

export default Proj