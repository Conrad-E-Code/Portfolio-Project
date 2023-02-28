import { useNavigate } from "react-router-dom"

function ImageCard({image, details, link}) {

    return(
        <a className="image-a" href={link}>
        <div  className="img-card">
            <img width={75} height={75}
            className="icon" src={image} 
            alt="Image"/> 
            <span className="img-detail">{details}</span>
            
        </div>
        </a>
    )

}
export default ImageCard