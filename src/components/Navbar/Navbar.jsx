import React from 'react'
import "./Navbar.css"
import "../../App.css"

const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left"><i>OSON</i></div>
        <div className="n-right">
            <div className="n-list">
                <ul className='ul-list'>
                    <li><a href='#home'>HOME</a></li>
                    <li><a href='#about'>ABOUT</a></li>
                    <li><a href='#projects'>PROJECTS</a></li>
                    <li><a href='#skills'>SKILLS</a></li>
                    <li><a href='#hobby'>HOBBY</a></li>
                </ul>
            </div>
            <button className="button">
                Contact
            </button>
        </div>
    </div>
  )
}

export default Navbar