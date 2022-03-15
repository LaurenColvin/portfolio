import "./App.css";
import {Routes, Link, Route} from "react-router-dom"
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {faHtml5} from '@fortawesome/free-brands-svg-icons'
import {faCss3Alt} from '@fortawesome/free-brands-svg-icons'
import {faReact} from '@fortawesome/free-brands-svg-icons'
import {faJsSquare} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'

import ScrollTop from "./ScrollTop/ScrollTop";
import Home from "./Home/Home";
import Work from "./Work/Work";
import About from "./About/About";

let menu = <FontAwesomeIcon icon={faBars} size="2x" style={{color: '#AB4289'}}/>
let htmlIcon = <FontAwesomeIcon icon={faHtml5} size="3x" style={{color: '#AB4289'}}/>
let cssIcon = <FontAwesomeIcon icon={faCss3Alt} size="3x" style={{color: '#AB4289'}}/>
let reactIcon = <FontAwesomeIcon icon={faReact} size="3x" style={{color: '#AB4289'}}/>
let jsIcon = <FontAwesomeIcon icon={faJsSquare} size="3x" style={{color: '#AB4289'}}/>
let githubIcon = <FontAwesomeIcon icon={faGithub} size="3x" style={{color: '#AB4289'}}/>



function App() {

const [menuOpen, setMenuOpen] = useState(false)

const handleToggle = () => {
  setMenuOpen(prev => !prev)
}

  return (
    <div className="App">
      <nav>
        <div className="logo">
          <Link className="link" to="/"><h2>LC</h2></Link>
        </div>
        <div className="routes">
          <Link className="link" to="/work"><h3>work</h3></Link>
          <Link className="link" to="/about"><h3>about</h3></Link>
        </div>
        {menuOpen === false ? (
          <div className="menu-closed" onClick={handleToggle}>
            {menu}
          </div>
        ) : (
          <div className="menu-open">
            <div className="menu-closed" onClick={handleToggle}>
              {menu}
            </div>
            <Link  onClick={handleToggle} className="link" to="/work"><h3>work</h3></Link>
            <Link  onClick={handleToggle} className="link" to="/about"><h3>about</h3></Link>
          </div>
        )}
      </nav>
      <div className="main">
      <ScrollTop>
        <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/work" element={<Work />}/>
              <Route path="/about" element={<About githubIcon={githubIcon} jsIcon={jsIcon} reactIcon={reactIcon} cssIcon={cssIcon} htmlIcon={htmlIcon} />}/>
          </Routes>
      </ScrollTop>
      </div>
      <footer>
        <h5>Created and Designed by Lauren Colvin</h5>
      </footer>
    </div>
  );
}

export default App;
