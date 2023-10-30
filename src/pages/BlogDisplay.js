import React from 'react'

import '../styles/ProjectDisplay.css'
import { useParams } from 'react-router-dom'
import GitHubIcon from '@material-ui/icons/GitHub'
import { blogList } from '../helper/BlogsList'

function BlogDisplay() {
    const{id} = useParams();
    const blog = blogList[id]

  return (
    <div className='project'>
        <h1> {blog.name}</h1>
        <img src={blog.image} />
        <div className='blog-topic-covered'>
            <b>Topics Covered</b>: {blog.topicsCovered}
        </div>
        <GitHubIcon />
        
    </div>
  )
}

export default BlogDisplay