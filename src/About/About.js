const About = (props) => {
    return (
        <div>
            <h1>About Me</h1>
            {props.htmlIcon}
            {props.cssIcon}
            {props.jsIcon}
            {props.reactIcon}
            {props.githubIcon}
        </div>
    )
}

export default About