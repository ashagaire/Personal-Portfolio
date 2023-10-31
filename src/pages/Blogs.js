import React from 'react'
import '../styles/Projects.css'
import { blogList } from '../helper/BlogsList'
import BlogItem from '../components/BlogItem'
function Blogs() {
  return (
    <div className='projects'>
      <h1>Blogs</h1>
      <div className='projectList'>
        {blogList.map((blog, idx) => {
          return (
          <BlogItem id={idx} name={blog.name} image={blog.image} topicsCovered={blog.topicsCovered} link={blog.link} />
          )
            
        })}
      </div>
      
    </div>
  )
}

export default Blogs