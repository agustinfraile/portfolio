import React from 'react';
import './IconEducation.css';

const IconEducation = ({ img, name }) => {
  return (
    <div className='education-cnt'>
        <img 
          src={ img } 
          alt={`Logo de ${name}`} 
          title={`Logo de ${name}`} 
        />
    </div>
  )
}

export default IconEducation