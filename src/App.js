import './App.css';

// We are using react-icons, is fontawesome a better alternative?
// These icons are not the same as the one in the design
// TODO: Choose the right fonts
import { FiGithub } from 'react-icons/fi';
import {RiLinkedinLine, RiDiscordLine, RiInstagramLine, RiSpotifyLine} from 'react-icons/ri'

function App() {
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

      <div className='about-me'>
        <h1 className='right-parallax'>ABOUT ME</h1>
        <p>Junior  Engineer with a passion for design and manifesting ideas into reality!</p>
      </div>
    </div>
  );
}

export default App;
