import React from 'react'
import "./Intro.css"
import Github from "../image/github.png"
import LinkedIn from "../image/linkedin.png"
import Instagram from "../image/instagram.png"


const Intro = () => {
  return (
    <div className="intro" id='home'>
        <div className="i-left">
            <span>Hi ! I Am</span>
            <span>Angom Oson</span>
            <span>Full Stack Developer, working hard and learning to produce Quality work</span>
            <div className="i-icons">
                <img src={Github} alt="" />
                <img src={LinkedIn} alt="" />
                <img src={Instagram} alt="" />
            </div>
        </div>
        <div className="i-right">
            ahjsdga
        </div>
    </div>
  )
}

export default Intro