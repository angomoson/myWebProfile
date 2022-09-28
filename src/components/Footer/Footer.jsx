import React from 'react'
import "./Footer.css"

const Footer = () => {

  const d = new Date();
  let year = d.getFullYear();

  return (
    <div className='f-wrapper'>
        <div className="f-copy">
            <p> Copyright &#169; {year}, Angom Oson Singh </p>
        </div>
    </div>
  )
}

export default Footer