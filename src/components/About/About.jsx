import React from 'react'
import "./About.css"
import Education from './Education'

const About = () => {
  return (
    <div>
        <div className='a-page'>
        <section id='about' className="a-wrapper">
            <div className="a-left">
                <div className="a-left-about">
                    <h2>About Me</h2>
                </div>
                <div className="a-left-content">
                    <p>Hi ! I am <span>Angom Oson Singh</span> form Phayeng Mayai Leikai. I am a Manipuri by birth, I speak English and Manipuri (and little Hindi).
                    I have been working hard and learning new things. I love what I do and have been doing so for years. </p>
                </div>
            </div>
            <div className="a-right">
                <div className="edu-head">
                    <div className="edu-content">
                        <p className='edu-title'>Educational background</p>   

                        <Education 
                            institute= "Edureka"
                            course= "Internship, Full Stack Web Development"
                        />
                        <Education 
                            institute= "National Institute of Technology, Manipur"
                            course= "BTech, Computer Science and Engineering"
                        />
                        <Education 
                            institute= "Sainik School Imphal"
                            course= "Senior Secondary Examination"
                        />


                    </div>
                </div>
            </div>
        </section>
        <hr className='white-hr'/> 
        </div>  
    </div>
  )
}

export default About