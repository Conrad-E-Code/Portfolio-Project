import { NavLink } from "react-router-dom"

function NavBar() {
    return(
        <nav className="nav-bar">
            <NavLink className="nav-link" exact to="/Portfolio-Project">Home</NavLink>
            <NavLink className="nav-link" exact to="/skills">Skills</NavLink>
            <NavLink className="nav-link" exact to="/projects">Projects</NavLink>
            {/* <NavLink className="nav-link" exact to="/resume">Resume</NavLink> */}
            {/* <NavLink className="nav-link" exact to="/demo">Project Demos</NavLink> */}
        </nav>
    )
}
export default NavBar