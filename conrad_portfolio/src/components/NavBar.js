import { NavLink } from "react-router-dom"

function NavBar() {
    return(
        <nav className="nav-bar">
            <a className="nav-link" href="#Home">Home</a>
            <a className="nav-link" href="#Skills">Skills</a>
            <a className="nav-link" href="#Projects">Projects</a>
            {/* <NavLink className="nav-link" exact to="/resume">Resume</NavLink> */}
            {/* <NavLink className="nav-link" exact to="/demo">Project Demos</NavLink> */}
        </nav>
    )
}
export default NavBar