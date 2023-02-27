import ImageCard from "./ImageCard"
import ProjectCard from "./ProjectCard"

function ProjectPage({header, map, page}) {
    return(
        <>
        <h1>{header}</h1>
        <div className="page">
            

            { page === "skills" ? map.map((skill)=>{
                return(
                    <ImageCard image={skill.image} details={skill.details} link={skill.link}/>
                )

            }): null}

            { page === "projects" ? map.map((proj)=> {
                return (
                    <ProjectCard image={proj.image} details={proj.details} link={proj.link} desc={proj.desc} />
                )
            }) : null}

        </div>
        </>
    )
}

export default ProjectPage