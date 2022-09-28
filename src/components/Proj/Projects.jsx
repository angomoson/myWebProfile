import React from 'react'
import "./Proj.css"

const Projects = (props) => {
  return (
    <div className='proj-section'>
        <div className="p-left">
            <h4>{props.title}</h4>
            <h2>{props.projName}</h2>
            <p>{props.projDet}</p>

            <p className='p-desc'>{props.projDesc}</p>
        </div>
        <div className="p-right">
            <img src={props.thumbnail} alt="thumbnail" className='thumbnail'/>
            <img src={props.image} alt="proj_photo" className='proj-photo'/>
        </div>
    </div>
  )
}

export default Projects;