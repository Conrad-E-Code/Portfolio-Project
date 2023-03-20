import ImageCard from "./ImageCard"
import ProjectPage from "./ProjectPage"
function HomePage({header, content}) {
    return(
    
        <div  className="home">
            <h1 className="home-head" >{header}</h1>
            <h2 style={{color:"aliceblue",textDecoration:"underline"}}>About Me:</h2>
            <div className="page">
            <div className="home-cont">{content}</div>
            <ImageCard image="https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
            details="My Blog" link="https://medium.com/@conrad.etherington" />
             </div>
        </div>
    )
}

export default HomePage