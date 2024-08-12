
import About from '../About/About';
import Contact from '../Contact/Contact';
import Intro from '../Intro/Intro';
import Projects from '../Projects/Projects';

import './Home.css';

const Home = () => {
  return (

    <div className="all-container">
      <Intro />
      <About />
      <Projects />
      <Contact />
    </div>

  )
}

export default Home