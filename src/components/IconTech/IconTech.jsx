import React from 'react';
import './IconTech.css';

const IconTech = ({ img, name }) => {
  return (
    <div className='tech-cnt'>
        <img 
          src={ img } 
          alt={`Logo de ${name}`} 
          title={`Logo de ${name}`}
        />
        
    </div>
  )
}

export default IconTech