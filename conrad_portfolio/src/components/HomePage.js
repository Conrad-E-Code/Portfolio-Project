import ImageCard from "./ImageCard"
import ProjectPage from "./ProjectPage"
function HomePage({header, content}) {
    return(
        <div id="home" className="home">
            <h1 className="home-head" >{header}</h1>
            <h2 style={{color:"aliceblue",textDecoration:"underline"}}>About Me:</h2>
            <div className="page">
            <div className="home-cont">{content}</div>
            <ImageCard image="https://media.licdn.com/dms/image/D4E35AQFHfxrpKT0lFQ/profile-framedphoto-shrink_200_200/0/1668398441886?e=1678096800&v=beta&t=notHneKgTSOz4nNoPeP6kK30Bq9M2b-80-fXzTkL75c"
            details="My LinkedIn" link="https://www.linkedin.com/in/conrad-etherington/" />
            <ImageCard image="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
            details="My GitHub" link="https://github.com/Conrad-E-Code" />
            <ImageCard image="https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
            details="My Blog" link="https://medium.com/@conrad.etherington" />
             </div>
        </div>
    )
}

export default HomePage