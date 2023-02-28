import ImageCard from "./ImageCard"
import ProjectCard from "./ProjectCard"

function ProjectPage({header, map, page}) {
    let softSkills = [
        {
            image: "",
            details: "Communication",
            link: ""
        },
        {
            image: "",
            details: "Adaptability",
            link: ""
        },
        {
            image: "",
            details: "Collaboration",
            link: ""
        },        
        {
            image: "",
            details: "Problem-solving",
            link: ""
        },
        {
            image: "",
            details: "Time-management",
            link: ""
        },
        {
            image: "",
            details: "Critical Thinking",
            link: ""
        },
    ]
    return(
        <>
            <h1>{header}</h1>
            <div className="page">
                {page === "skills" ? <a href="https://conrad-e-code.github.io/The-Joke-Factory/" className="skill-desc">I build things!
                </a> : null}

                { page === "skills" ? map.map((skill)=>{
                    return(
                        <ImageCard image={skill.image} details={skill.details} link={skill.link}/>
                    )

                }): null}

                { page === "projects" ? map.map((proj)=> {
                    return (
                        <ProjectCard demo={proj.demo} name={proj.name} image={proj.image} details={proj.details} deploy_link={proj.deploy_link} desc={proj.desc} deployed={proj.deployed} points={proj.points} implemented={proj.implemented} />
                    )
                }) : null}

            </div>
            {page === "skills" ? <h1>Soft Skills</h1> : null}
            {page === "skills" ? <div className="page-spin">
                {softSkills.map((sSkill) => {
                    return (
                        <ImageCard details={sSkill.details} />
                    )
                })}
            </div> : null}
        </>
    )
}

export default ProjectPage