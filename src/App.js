import "./App.css";
import {Routes, Link, Route} from "react-router-dom"
import Home from "./Home/Home";
import Work from "./Work/Work";
import About from "./About/About";

function App() {
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
      </nav>
      <div className="main">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/work" element={<Work />}/>
            <Route path="/about" element={<About />}/>
        </Routes>
      </div>
      <footer>
        <h5>Created and Designed by Lauren Colvin</h5>
      </footer>
    </div>
  );
}

export default App;
