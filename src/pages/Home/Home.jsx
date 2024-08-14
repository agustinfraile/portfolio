import './Home.css';

import Footer from '../../components/Footer/Footer';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Intro from '../Intro/Intro';
import Projects from '../Projects/Projects';


const Home = () => {
  return (

    <div className="all-container">
      <Intro />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>

  )
}

export default Home