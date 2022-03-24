import headshot from "/Users/lauren/SEI/portfolio/src/assets/Headshot-colorful.JPG";

const About = (props) => {
  return (
    <div className="about">
      <div className="intro">
        <img
          className="headshot"
          src={headshot}
          alt="headshot-lauren-colvin"
        ></img>
        <div className="intro-text">
            <h1>Lauren Colvin</h1>
            <h3>Welcome to my portfolio!</h3>
            <p>
            Thanks for stopping by. I am a designer turned web developer who
            brings enthusiasm, creativity and an exceptional work ethic to every
            team. I am trained as a full stack developer, and provide great value
            with my interpersonal skills, big-picture thinking, efficient
            solutions and positive attitude. I work well under pressure and love
            to think outside of the box to solve challenging problems.
            </p>
        </div>
      </div>
      <h2>Technical Skills</h2>
      <div className="skills-container">
        {props.htmlIcon}
        {props.cssIcon}
        {props.jsIcon}
        {props.reactIcon}
        {props.githubIcon}
      </div>
      <h2>Current Obsessions</h2>
      <li>Walks on the beach for sunset</li>
      <li>My fluffy orange cat, Louie</li>
      <li>Cooking new recipes</li>
      <li>Planting succulent gardens</li>
    </div>
  );
};

export default About;
