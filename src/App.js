import './App.css';

// We are using react-icons, is fontawesome a better alternative?
// These icons are not the same as the one in the design
// TODO: Choose the right fonts
import { FiGithub } from 'react-icons/fi';
import {RiLinkedinLine, RiDiscordLine, RiInstagramLine, RiSpotifyLine} from 'react-icons/ri'
import { useLayoutEffect, useState } from 'react';

function App() {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })

  useLayoutEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })

    }
    window.addEventListener('resize', handleResize)
  })

  return (
    <div className="App">
      {/* TODO: Rename class name */}
      <header className="App-header">
        <div className='hide_overflow'>
          <h3 className='name'>Andy Chen</h3>
          <p className='desc'>Full Stack Developer & UI / UX Designer</p>
        </div>

        {dimensions.width >= 900 ? <div className='medias'>
          <ul className='media-list'>
            <li><FiGithub/></li>
            <li><RiLinkedinLine/></li>
            <li><RiDiscordLine/></li>
            <li><RiInstagramLine/></li>
            <li><RiSpotifyLine/></li>
          </ul>
        </div>: ''}
      </header>
    </div>
  );
}

export default App;
