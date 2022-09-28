
import React from 'react'


const SkillItem = (props) => {
  return (
    <div>
        <div className='s-item'>
              <img src={props.icon} alt={props.icon} /> 
              <p>{props.text}</p>
        </div>
    </div>
  )
}

export default SkillItem