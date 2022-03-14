import projectOne from "/Users/lauren/SEI/portfolio/src/assets/Podcast-Project-1.png";
import projectTwo from "/Users/lauren/SEI/portfolio/src/assets/Critterpedia-project-2.png";

const Work = () => {
  return (
    <div className="projects">
      <div className="project-container">
        <div className="blue-box">
          <h3>
            Project One:
            <br /> HTML, CSS, JavaScript
          </h3>
          <a
            href="https://laurencolvin.github.io/Portfolio-Project-1/"
            target="_blank"
          >
            <img
              className="project-img"
              src={projectOne}
              alt="Podcast-project-1"
            />
          </a>
        </div>
        <div className="gradient-border">
          <div className="text-box">
            <p>
              For this project we were tasked with creating a website that was
              designed mobile first, using grid or flex box, and javascript
              functions. I decided to re-create my podcast website from scratch,
              adding in scroll functions, animations and playing with z-index
              for my text and images on top of divs.
            </p>
            <a
              className="github-link"
              href="https://github.com/LaurenColvin/Portfolio-Project-1"
            >
              Github
            </a>
          </div>
        </div>
      </div>
      <div className="project-container">
        <div className="green-box">
          <h3>
            Project Two:
            <br /> React App
          </h3>
          <a
            href="https://laurencolvin.github.io/project-2-react/"
            target="_blank"
          >
            <img
              className="project-img"
              src={projectTwo}
              alt="Podcast-project-1"
            />
          </a>
        </div>
        <div className="gradient-border">
          <div className="text-box green">
            <p>
              For this project we were tasked with creating a React App that
              uses a third-party api to fetch data. I created a Critterpedia
              that uses data from the video game Animal Crossing to filter for
              critters based on month and type. This app showcases multiple
              components, useStates, passing of props and filtering of data.
            </p>
            <a
              className="github-link"
              href="https://github.com/LaurenColvin/project-2-react"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
