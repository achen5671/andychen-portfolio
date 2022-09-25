import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// App Components
import Skills from './App/Skills';
import Story from './App/Story';

// We are using react-icons, is fontawesome a better alternative?
// These icons are not the same as the one in the design
// TODO: Choose the right fonts
import { FiGithub } from 'react-icons/fi';
import { RiLinkedinLine, RiDiscordLine, RiInstagramLine, RiSpotifyLine } from 'react-icons/ri';

import { useInView } from 'react-intersection-observer';
import Footer from './App/Footer';

function App() {
  // TODO: Track window / dimension changes
  //    To hide components when screen gets too small. We can use `useState` with `useLayoutEffect` with callback handleResize
  //    but that caused app to freeze and it's clunky.

  // Handles animation depending on scroll position, using react-intersection-oberser
  //  See Doc: https://github.com/thebuilder/react-intersection-observer#readme
  const { ref: myRef, inView: myElementIsVisible } = useInView();

  return (
    <div className="App">
      {/* Header */}
      {/* TODO: Move to it's own componenet that accepts a `title` and `desc` prop */}
      <header className="App-header">
        <div className="hide_overflow">
          <h3 className="name">Andy Chen</h3>
          <p className="desc">Full Stack Developer & UI / UX Designer</p>
        </div>

        <div className="medias">
          <ul className="media-list">
            <li>
              <a href="https://github.com/achen5671">
                <FiGithub className="media-icon" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/achen5671/">
                <RiLinkedinLine className="media-icon" />
              </a>
            </li>
            <li>
              <a href="https://discordapp.com/users/AC#3933">
                <RiDiscordLine className="media-icon" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/andy__c.01/">
                <RiInstagramLine className="media-icon" />
              </a>
            </li>
            <li>
              <a href="https://open.spotify.com/user/k3sg4oedmi6gyoo1jg177e3a3">
                <RiSpotifyLine className="media-icon" />
              </a>
            </li>
          </ul>
        </div>
        
      </header>

      {/* TODO: Add who I am and when I was born and where */}
      <section id="about-me">
        <h1 ref={myRef} className="about-me-title">
          <span className={`about-me-text ${myElementIsVisible ? 'animateAboutMe' : ''}`}>
            ABOUT ME
          </span>
        </h1>
        <p className="about-me-desc">
          Junior Engineer with a passion for design and manifesting ideas into reality!
        </p>

      </section>
{/* 
      <div className='this-is-me'>
        <span>This is me!</span>
        Why I dont need to do a ./public?
        <img src='./images/pfp.jpeg' height={300}/>
      </div> */}

      {/* My Team and Tech Skills with skill bar */}
      <Skills />

      {/* My Story and experiences */}
      <Story />

      <Footer />
    </div>
  );
}

export default App;
