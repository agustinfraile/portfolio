import React, { useState } from 'react';

import cv from '../../assets/images/icons/cv-logo.png';
import pdf from '../../assets/pdf/cv.pdf';

import menu from '../../assets/images/icons/navbar/menu.png';
import close from '../../assets/images/icons/navbar/x.png';

import '../NavBar/NavBar.css';

const NavBar = () => {

  const [isToggled, setIsToggled] = useState(false);

  const toggleMenu = () => {
    setIsToggled(!isToggled);
  }

  const handleClick = () => {
    setIsToggled(false);
  }

  const handleDownload = (e) => {
    e.preventDefault()
    const link = document.createElement("a");
    link.href = pdf;
    link.download = "Agustin_Fraile-CV.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  return (
    <div className='nav_cnt'>
        <div className='nav_cnt-logos'>
          <div className='nav_cnt-logos--icon'>

          </div>

          <div 
            className='nav_cnt-logos--menu'
            onClick={toggleMenu}
          >
            <img src={isToggled ? close : menu} alt="Menu" />
          </div>
        </div>
        {/* <div className='nav_cnt-logo'></div> */}
        <div 
          className={`navbar-toggle ${isToggled ? '' : 'invisible'}`}
        >
          <ul>
            <a href="#inicio">
              <li onClick={handleClick}>Inicio</li>
            </a>
            <a href="#sobre-mi">
              <li onClick={handleClick}>Sobre mi</li>
            </a>
            <a href="#projects">
              <li onClick={handleClick}>Proyectos</li>
            </a>
            <a href="#contact">
              <li onClick={handleClick}>Contacto</li>
            </a>
          </ul>

          <div 
            className='nav_cv' 
            onClick={handleDownload}
            alt="Logo de curriculum" title='Descarga mi CV'
          >
            <img src={ cv } />
          </div>
        </div>
    </div>
  );
};

export default NavBar