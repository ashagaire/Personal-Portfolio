import React from 'react'
import { useNavigate } from 'react-router-dom'

function BlogItem({id, name, image }) {
    const navigate = useNavigate()
  return (
    <div className='projectItem' 
        onClick={() => {
            navigate('/blog/'+ id)
            }}>
        <div style={{backgroundImage: `url(${image})`}} className='bgImage'/>
        <h1>{name}</h1>
    </div>
  )
}

export default BlogItem