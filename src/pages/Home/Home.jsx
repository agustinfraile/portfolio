import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Intro from '../Intro/Intro'
import Projects from '../Projects/Projects'

import './Home.css';

const Home = () => {
  return (
    <div>
       <NavBar />
       <div className="all-container">
        <Intro />
        <About/>
        <Projects />
        <Contact />
       </div>
    </div>
  )
}

export default Home