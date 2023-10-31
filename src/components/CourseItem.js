import React from 'react'
import { useState } from 'react';
import Modal from 'react-modal';
import '../styles/Projects.css'
    

function CourseItem({id, name, image }) {

    const [selectedImage, setSelectedImage] = useState(null);
  
    const handleImageClick = (image) => {
      setSelectedImage(image);
    };
  
    const handleClose = () => {
      setSelectedImage(null);
    };

  return (
    <div>
    <div className='projectItem-course' onClick={() => handleImageClick(image)}>
        <div style={{backgroundImage: `url(${image})`}} className='bgImage'/>
        <h1>{name}</h1>
    </div>
    <Modal
        isOpen={selectedImage !== null}
        onRequestClose={handleClose}
        contentLabel="Enlarged Image"
        className='image-container'
      >
        <div  style={{
          position: 'relative',  margin: "10px"
        }}>
        
          {selectedImage && <img src={image} alt="Enlarged Image" className='responsive-image' />}
          <button 
            onClick={handleClose} 
            style={ {position: 'absolute', top: '-50px', right: '0',margin: '10px'}} 
            className='pop-up-btn'
            >
                Close
            </button>
        </div>
      </Modal>
    </div>
  )
}

export default CourseItem