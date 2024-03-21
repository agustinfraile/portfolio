import React from 'react';

import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Background from '../Background/Background';
import Stack from '../Stack/Stack';
import Experience from '../Experience/Experience';

import styles from './Home.module.css';


const Home = () => {
  return (
    
    <>
      <Header />
      <Background />
      <Stack />
      <Experience />
      <Contact />
    </>
    
  )
}

export default Home;