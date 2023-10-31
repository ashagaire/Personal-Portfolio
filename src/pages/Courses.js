import React from 'react'

import '../styles/Projects.css'

import CourseItem from '../components/CourseItem'
import { coursera, datacamp, congnitiveclass,sataedu } from '../helper/CoursesList'
function Courses() {
  return (
    <div className='projects'>
    <div>
    <h1>From Sataedu</h1>
      <div className='projectList'>
        {sataedu.map((course, idx) => {
          return (
          <CourseItem id={idx} name={course.name} image={course.image} />
          )
            
        })}
      </div>
      <h1 >From Coursera.org</h1>
      <div className='projectList'>
        {coursera.map((course, idx) => {
          return (
          <CourseItem id={idx} name={course.name} image={course.image} />
          )
            
        })}
      </div>
       
      <h1>From Datacamp.com</h1>
      <div className='projectList'>
        {datacamp.map((course, idx) => {
          return (
          <CourseItem id={idx} name={course.name} image={course.image} />
          )
            
        })}
      </div>
      
      <h1>From Congnitiveclass.ai</h1>
      <div className='projectList'>
        {congnitiveclass.map((course, idx) => {
          return (
          <CourseItem id={idx} name={course.name} image={course.image} />
          )
            
        })}
      </div>
      
      </div>
    </div>
  )
}

export default Courses