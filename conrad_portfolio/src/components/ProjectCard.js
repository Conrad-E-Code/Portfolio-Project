function ProjectCard({image, details, link, desc}) {
    return (
        <a href={link}>
            <div className="proj-card">
                <h1>{details}</h1>
                <img width={300} height={300} src={image} />
                <h3 style={{"color": "aliceblue"}}>{desc}</h3>
            </div>
        </a>
    )
}

export default ProjectCard