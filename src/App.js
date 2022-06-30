import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// We are using react-icons, is fontawesome a better alternative?
// These icons are not the same as the one in the design
// TODO: Choose the right fonts
import { FiGithub } from 'react-icons/fi';
import {RiLinkedinLine, RiDiscordLine, RiInstagramLine, RiSpotifyLine} from 'react-icons/ri'

import { useInView } from 'react-intersection-observer';
import Skills from './Skills';

function App() {
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  return (
    <div className="App">
      {/* TODO: Rename class name */}
      {/* TODO: Move to it's own componenet that accepts a `title` and `desc` prop */}
      {/* Header */}
      <header className="App-header">
        <div className='hide_overflow'>
          <h3 className='name'>Andy Chen</h3>
          <p className='desc'>Full Stack Developer & UI / UX Designer</p>
        </div>

        <div className='medias'>
          <ul className='media-list'>
            <li><FiGithub/></li>
            <li><RiLinkedinLine/></li>
            <li><RiDiscordLine/></li>
            <li><RiInstagramLine/></li>
            <li><RiSpotifyLine/></li>
          </ul>
        </div>
      </header>

      <section id='about-me'>
        <h1 ref={myRef} className='about-me-title'><span className={`about-me-text ${(myElementIsVisible ? 'animateAboutMe' : '')}`}>ABOUT ME</span></h1>
        <p className='about-me-desc'>Junior  Engineer with a passion for design and manifesting ideas into reality!</p>
      </section>

      <Skills />
    </div>
  );
}

export default App;
