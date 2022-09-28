import React from 'react'
import "./Hobby.css"

const Hobbies = (props) => {
  return (
    <div className='h-item'>
        <img className='h-icon' src={props.img} alt={props.name} />
        <p className='h-p'>{props.name}</p>
    </div>
  )
}

export default Hobbies