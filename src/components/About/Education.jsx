import React from 'react'
import "./About.css"

const Education = (props) => {
  return (
    <div>
        <p className='edu-1'>{props.institute}</p>
        <p className='edu-2'>{props.course}</p>
    </div>
  )
}

export default Education