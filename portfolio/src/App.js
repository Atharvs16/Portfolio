import './App.css';
import linkedin from './resources/linkedin.svg';
import github from './resources/github.svg';
import instagram from './resources/instagram.svg';
import downarrow from './resources/arrowdown.svg';
import pfp from './resources/pfp.jpg'

function App() {
  return (
    <body>
      <nav>
      <h1>Atharv</h1>
        <div id="right-nav">
          <a>Home</a>
          <a>About</a>
          <a>Skills</a>
          <a>Services</a>
          <a>Portfolio</a>
          <a>Contact</a>
        </div>
      </nav>
      <div id="home">
        <div id="left-home">
          <a href='https://www.linkedin.com/in/atharv-s16' target='blank'>
            <img className='left-logo' src={linkedin} alt='LinkedIn' title='LinkedIn'></img>
          </a>
          <a href='https://github.com/Atharvs16' target='blank'>
            <img className='left-logo' src={github} alt='GitHub' title='GitHub'></img>
          </a>
          <a href='https://www.instagram.com/atharv_s16' target='blank'>
            <img className='left-logo' src={instagram} alt='Instagram' title='Instagram'></img>
          </a>
        </div>
        <div id="center-home">
          <h1>Atharv Satpute 👋🏻</h1>
          <h3>FrontEnd Developer</h3>
          <p>I'm a creative FrontEnd developer based in pune, and I'm very passionate and dedicated to my work!</p>
          <button>
              About me
              <img src={downarrow}></img>
          </button>
        </div>
        <div id="right-home">
          <img src={pfp}></img>
        </div>
      </div>
    </body>
  );
}

export default App;