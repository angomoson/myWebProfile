import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div className= "c-wrapper">
        <section className='contact'>
            <div className="con-left">
                <h3>Get In Touch</h3>
                <u>ANGOMOSN64@GMAIL.COM</u>
                <div className="social-links">
                    <link rel="stylesheet" href="" />
                    <a href="https://github.com/angomoson" target="_blank">Github</a>
                    <a href="https://www.linkedin.com/in/angom-oson-singh-32784a171/" target="_blank">LinkedIn</a>
                    <a href="https://www.instagram.com/angom_oson/" target="_blank">Instagram</a>
                    <a href="https://www.facebook.com/angom.oson" target="_blank">Facebook</a>
                </div>
            </div>
            <div className="map">

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14482.131371396794!2d93.80733667806776!3d24.84564464497266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37492a0514c79673%3A0xe5561dd01b773e60!2sPhayeng%2C%20Manipur%20795146!5e0!3m2!1sen!2sin!4v1664256461355!5m2!1sen!2sin" title="myPlace" width="100%" height="380" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>
            
        </section>
    </div>
  )
}

export default Contact