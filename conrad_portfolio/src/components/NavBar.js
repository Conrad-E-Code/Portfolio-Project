import { NavLink } from "react-router-dom"
import githubMark from "../images/github-mark-white.png"
import linkedin from "../images/linkedin.png"
function NavBar() {
    return(
        <nav className="nav-bar">
            <a className="nav-link" href="#Home">Home</a>
            <a className="nav-link" href="#Skills">Skills</a>
            <a className="nav-link" href="#Projects">Projects</a>
            {/* <NavLink className="nav-link" exact to="/resume">Resume</NavLink> */}
            {/* <NavLink className="nav-link" exact to="/demo">Project Demos</NavLink> */}
        <a className="social-link" href="https://github.com/Conrad-E-Code"><img width="25" height="25"  src={githubMark} alt="github"></img></a>
        <a className="social-link-end" href="https://www.linkedin.com/in/conrad-etherington/"><img width="25" height="25"  src={linkedin} alt="github"></img></a>
        </nav>
    )
}
export default NavBar