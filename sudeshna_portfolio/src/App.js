import wallpaper_1 from './resources/wallpaper_1.jpg';
import './App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Parallax pages={8} style={{ backgroundImage: `url(${wallpaper_1})` }}>
        <ParallaxLayer offset={0} speed={0.5} id="home">
          <div className="App-header">
            <h1>Sudeshna Bora</h1>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5} id="education">
          <div className="App-header">
            <h1>Education</h1>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.5} id="experience">
          <div className="App-header">
            <h1>Experience</h1>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.5} id="projects">
          <div className="App-header">
            <h1>Projects</h1>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={0.5} id= "skills">
          <div className="App-header">
            <h1>Skills</h1>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={5} speed={0.5} id="blogs">
          <div className="App-header">
            <h1>Blogs</h1>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={6} speed={0.5} id="contact">
          <div className="App-header">
            <h1>Contact</h1>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
