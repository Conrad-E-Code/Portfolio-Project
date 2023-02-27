import ImageCard from "./ImageCard"


function ProjectPage({header, map}) {
    return(
        <>
        <h1>{header}</h1>
        <div className="page">
            

            {map.map((skill)=>{
                return(
                    <ImageCard image={skill.image} details={skill.details} link={skill.link} />
                )

            })}
        </div>
        </>
    )
}

export default ProjectPage