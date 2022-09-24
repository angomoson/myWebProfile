import React from 'react'
import "./About.css"

const About = () => {
  return (
    <div>
        <section id='about' className="timeline-section">
            <h1 className='a-head'>ABOUT</h1>
            <div className="timeline-items">
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="date">2015</div>
                    <div className="content">
                        <h3>Sainik School Imphal</h3>
                        <p>Senior Secondary Examination</p>
                    </div>
                </div>
            </div>
            <div className="timeline-items">
                <div className="timeline-item nit">
                    <div className="timeline-dot dot-nit"></div>
                    <div className="date date-nit">2020</div>
                    <div className="content content-nit">
                        <h3>National Institute of Technology</h3>
                        <p>BTech Degree in</p>
                        <p>Computer Science and Engineering</p>
                    </div>
                </div>
            </div>
            <div className="timeline-items">
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="date">2022</div>
                    <div className="content">
                        <h3>Internship</h3>
                        <p>Full Stack Web Development</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About