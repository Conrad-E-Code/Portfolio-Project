import { Link } from "react-router-dom"
import { useState } from "react"
import ImageCard from "./ImageCard"
function ProjectCard({image, details, deploy_link, desc, deployed, name, demo, points, implemented}) {
    const [show, setShow] = useState(false)
    const [showDetails, setShowDetails] = useState(false)
    function handleEnter() {
        console.log("handleEnter")
        setShow((prev) => prev = !prev)
        console.log(show)
    }
    function handleExit() {
        console.log("handleExit")
        setShow((prev) => prev = !prev)
        console.log(show)
    }
    function handleShowDetails() {
        console.log("handleShowDetails")
        setShowDetails((prev) => prev = !prev)
    }
    return (
            <div  className="proj-card">
                {deployed? <Link to={deploy_link}> <button className="button">Deployed Site</button></Link>:null}
                {<button onClick={handleShowDetails} className="button">{showDetails ? "Hide Details" : "Show Details"}</button>}
                <h1>{details}</h1>
                <h3 style={{"color": "aliceblue"}}>{desc}</h3>
                {showDetails ? <ul>{points? points.map((point)=>{
                    return(
                        <li style={{"color": "aliceblue"}}className="bullet">{point}</li>
                    )
                }): null}</ul> : demo === "" ? <img height={250} width={250} src={image} /> : null}
                {demo}
                {implemented && showDetails ? <h3 style={{"color": "aliceblue"}}>Technologies Implemented in This Project:</h3> : null}
                <div className="tech-used">
                    
                    {implemented && showDetails ? implemented.map((skill)=>{
                        return(
                            <ImageCard image={skill.image} details={skill.details} link={skill.link} />
                        )
                    }) : null}
                </div>

            </div>
    )
}

export default ProjectCard