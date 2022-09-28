import React from 'react'
import "./Skills.css"
import SkillItem from './SkillItem'
import html from "../image/html.png"
import css from "../image/css.png"
import bootstrap from "../image/bootstrap.png"
import js from "../image/js.png"
import react from "../image/react.png"
import python from "../image/python.png"
import c from "../image/c.png"
import Photoshop from "../image/photoshop.png"

const Skills = () => {
  return (
    <div id='skills'>
      <div className='skill-page'>
        <section id='section' className="sec-wrapper">
        <div className="s-left">
          <div className="s-left-title">
            <h3>Skills</h3>
          </div>
          <div className="s-left-desc">
            If you have an ability that required practice, training, or experience, you have a skill.
          </div>
        </div>

        <div className="s-right">
          <div className="s-right-title">
            <p>Some skills I learned overtime</p>
          </div>
          <div className="s-right-icons">
          <SkillItem 
              text="HTML" 
              icon= {html}
              />

              <SkillItem 
              text="CSS" 
              icon= {css}
              />

              <SkillItem 
              text="Bootstrap" 
              icon= {bootstrap}
              />

              <SkillItem 
              text="Java Script" 
              icon= {js}
              />

              <SkillItem 
              text="React" 
              icon= {react}
              />

              <SkillItem 
              text="Python" 
              icon= {python}
              />

              <SkillItem 
              text="C++" 
              icon= {c}
              />

              <SkillItem 
              text="Photoshop" 
              icon= {Photoshop}
              />
          </div>
        </div>
        </section>
        <hr className='white-hr'/>
        </div>
    </div>
  )
}
 
export default Skills