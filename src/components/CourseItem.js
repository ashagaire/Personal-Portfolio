import React from 'react'
import { Link } from 'react-router-dom'

function CourseItem({id, name, image }) {
  return (
    <div className='projectItem'>
        <div style={{backgroundImage: `url(${image})`}} className='bgImage'/>
        <h1>{name}</h1>
    </div>
  )
}

export default CourseItem