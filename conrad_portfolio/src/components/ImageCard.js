import { useNavigate } from "react-router-dom"

function ImageCard({image, details, link}) {

    return(
        <a href={link}>
        <div  className="img-card">
            <img width={50} height={50}
            className="icon" src={image} 
            alt="Image"/> 
            <span className="img-detail">{details}</span>
            
        </div>
        </a>
    )

}
export default ImageCard