import Work from "../Work/Work";
import Resume from "../assets/Lauren Colvin Resume.pdf";
import headshot from "../assets/Headshot.jpg";
import workspace from "../assets/Workspace.jpg";
import losAngeles from "../assets/Los-Angeles.jpg";
import webDesign from "../assets/Web Design.png";
import webDesignExample from "../assets/web-design-example.png";
import aesthetic from "../assets/aesthetic.jpg";
import darkHeadshot from "../assets/dark-headshot.jpg";

const Home = () => {
  return (
    <div>
      <div className="home-grid">
        <div className="left-column-one mobile-column">
          <img
            className="headshot"
            src={headshot}
            alt="headshot-lauren-colvin"
          ></img>
        </div>
        <div className="middle-column-one mobile-column-small">
          <div className="blurb">
            <h1>Hi, I'm Lauren Colvin</h1>
            <h3>
              a web developer, fashion designer, conceptual creative, brand
              storyteller & e-commerce expert.
            </h3>
          </div>
        </div>
        <div className="right-column-one mobile-column">
          <img
            className="headshot"
            src={workspace}
            alt="workspace-lauren-colvin"
          ></img>
        </div>
        <div className="left-column-two mobile-column">
          <img className="headshot" src={webDesign} alt="web-design"></img>
        </div>
        <div className="middle-column-two mobile-column-small">
          <div className="blurb-two">
            <h3>EXPERIENCE</h3>
            <h3>
              Sunrise Integration <br />
              Web Designer, 2022-2023 <br />
              <br />
              Show Me Your Mumu <br />
              Design Assistant 2020-2022
              <br />
              <br />
              Revolve
              <br />
              Purchasing Associate 2018-2020
            </h3>
          </div>
        </div>
        <div className="right-column-two mobile-column">
          <img className="headshot" src={losAngeles} alt="los-angeles"></img>
        </div>
        <div className="left-column-three mobile-column">
          <div className="blurb">
            <h3>
            I spent four years of my professional life working in the fashion industry and love helping clients find their visual identities and bring them to light in the best way possible. <br/><br/>
            Now I help businesses create websites that are clear, strong, and reflective of their brand and mission.
            </h3>
          </div>
        </div>
        <div className="middle-column-three mobile-column">
          <img
            className="headshot"
            src={webDesignExample}
            alt="web-design"
          ></img>
        </div>
        <div className="right-column-three mobile-column">
          <div className="blurb-three">
            <h1>SKILLS</h1>
            <h3>
              - HTML/CSS <br /> - JavaScript <br /> - React.js <br />
              - Node.js <br /> - Figma <br /> - Mongodb
              <br />
              - AWS <br /> -Shopify <br /> -SQL <br /> -Adobe Photoshop <br /> -Adobe Illustrator <br />
              -Responsive Web Design
            </h3>
          </div>
        </div>
        <div className="left-column-four mobile-column">
          <img className="headshot" src={aesthetic} alt="aesthetic"></img>
        </div>
        <div className="middle-column-four mobile-column-smaller">
          <div className="blurb">
            <h1>Get in touch with me so we can collaborate on your next project!</h1>
          </div>
        </div>
        <div className="right-column-four mobile-column">
          <img
            className="headshot"
            src={darkHeadshot}
            alt="dark-headshot-lauren-colvin"
          ></img>
        </div>
      </div>
      <div className="center">
        <a
          className="link"
          id="button"
          href={Resume}
          download="Lauren Colvin Resume.pdf"
        >
          Resume
        </a>
        <a
          className="link"
          id="button"
          href="https://www.linkedin.com/in/laurenleighcolvin/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
        <a
          className="link"
          id="button"
          href="mailto:lcolvin2013@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Contact Me
        </a>
      </div>
      {/* <Work/> */}
    </div>
  );
};

export default Home;
