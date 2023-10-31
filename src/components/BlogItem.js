import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Blogs.css'

function BlogItem({id, name, image, topicsCovered , link }) {
    
  return (
    <div className='projectItem-blog'>
        <Link to={link}><div style={{backgroundImage: `url(${image})`}} className='bgImage'/></Link>
        <h1>{name}</h1>
        <hr  className="line"/>
        <span className='blog-tags'>
        <b>Tags:</b> {topicsCovered}
        </span>
        
    </div>
  )
}

export default BlogItem