import React from 'react'

import '../styles/Projects.css'

import CourseItem from '../components/CourseItem'
import { coursera, datacamp, congnitiveclass,sataedu, udemy } from '../helper/CoursesList'
function Courses() {
  return (
    <div className='projects'>
    <div>
    <h1 className='courses-address'>Udemy</h1>
      <div className='projectList'>
        {udemy.map((course, idx) => {
          return (
          <CourseItem id={idx} name={course.name} image={course.image} />
          )
            
        })}
      </div>
    <h1 className='courses-address'>Sataedu</h1>
      <div className='projectList'>
        {sataedu.map((course, idx) => {
          return (
          <CourseItem id={idx} name={course.name} image={course.image} />
          )
            
        })}
      </div>
      <h1 className='courses-address'>Coursera.org</h1>
      <div className='projectList'>
        {coursera.map((course, idx) => {
          return (
          <CourseItem id={idx} name={course.name} image={course.image} />
          )
            
        })}
      </div>
       
      <h1 className='courses-address'>Datacamp.com</h1>
      <div className='projectList'>
        {datacamp.map((course, idx) => {
          return (
          <CourseItem id={idx} name={course.name} image={course.image} />
          )
            
        })}
      </div>
      
      <h1 className='courses-address'>Congnitiveclass.ai</h1>
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