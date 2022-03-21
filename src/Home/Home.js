import Work from "../Work/Work";

const Home = () => {
  return (
    <div>
    <div className="home-grid">
      <div className="left-column">
        <h1 className="blurb">
          Lauren Colvin is a designer turned software engineer living in Los
          Angeles California.
        </h1>
      </div>
      <div className="right-column"></div>
      <div className="center">
        <a
          className="link"
          id="button"
          href="https://drive.google.com/file/d/1v4_cmWjYucDVhR3n9FIy0Fe8HgadRpDt/view?usp=sharing"
          target="_blank"
        >
          Resume
        </a>
        <a
          className="link"
          id="button"
          href="https://www.linkedin.com/in/laurenleighcolvin/"
          target="_blank"
        >
          Linkedin
        </a>
      </div>
    </div>
    {/* <Work/> */}
    </div>
  );
};

export default Home;
