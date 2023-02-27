
function HomePage({header, content}) {
    return(
        <div className="home">
            <h1 className="home-head" >{header}</h1>
            <div className="home-cont">{content}</div>
        </div>
    )
}

export default HomePage