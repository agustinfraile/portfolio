import './Home.css';

import Footer from '../../components/Footer/Footer';
import About from '../About/About';
import Intro from '../Intro/Intro';
import Projects from '../Projects/Projects';


const Home = () => {
  return (

    <div className="all-container">
      <section id="home">
        <Intro />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </div>

  )
}

export default Home