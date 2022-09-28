import React from 'react'
import "./Intro.css"
import Github from "../image/github.png"
import LinkedIn from "../image/linkedin.png"
import Instagram from "../image/instagram.png"
import hero from "../image/intoPh.png"


const Intro = () => {
  return (
    <div className="intro" id='home'>
        <div className="i-left">
            <div className='i-hero-name'>Oson</div>  
            <div className="i-left-bottom">
              <u className='mail'>angomosn64@gmail.com</u>
              <br />
              <br />
              <p>/Web Developer</p>
              <p>/FrontEnd</p>
            </div>          
        </div>
        <div className="i-right">
            <div className="i-photo">
              <img src={hero} alt="hero" />
            </div>
            <div className="i-icons">
                    <a href="https://github.com/angomoson" target="_blank"><img src={Github} alt="" /></a>
                    <a href="https://www.linkedin.com/in/angom-oson-singh-32784a171/" target="_blank"><img src={LinkedIn} alt="" /></a>
                    <a href="https://www.instagram.com/angom_oson/" target="_blank"><img src={Instagram} alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Intro