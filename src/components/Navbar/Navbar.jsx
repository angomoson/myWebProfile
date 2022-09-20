import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">Oson</div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Hobby</li>
                    <li>Map</li>
                </ul>
            </div>
            <button className="button">
                Contact me
            </button>
        </div>
    </div>
  )
}

export default Navbar