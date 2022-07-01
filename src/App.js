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
            <li><a href='https://github.com/achen5671'><FiGithub className='icon'/></a></li>
            <li><a href='https://www.linkedin.com/in/achen5671/'><RiLinkedinLine className='icon'/></a></li>
            <li><a href='https://discordapp.com/users/AC#3933'><RiDiscordLine className='icon' /></a></li>
            <li><a href='https://www.instagram.com/andy__c.01/'><RiInstagramLine className='icon'/></a></li>
            <li><a href='https://open.spotify.com/user/k3sg4oedmi6gyoo1jg177e3a3'><RiSpotifyLine className='icon'/></a></li>
          </ul>
        </div>: ''}
      </header>
    </div>
  );
}

export default App;
