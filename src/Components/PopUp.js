const PopUp = params => {
    return (
    <div className="project-popup" onClick={params.onClick}>
        <div className="project-box" onClick={e => e.stopPropagation()}>
            <div className="project-title project-content">
                <h1>{params.title}</h1>
            </div>
            <div className="project-description project-content">
                <p>{params.description}</p>
            </div>
            <div className="project-technologies project-content">
                {params.technologies.map((technology, i) => (
                    <img key={i} src={require(`./../SVG/${technology}.svg`).default} alt={technology}/>
                ))}
            </div>
            <div className="project-images project-content">/IMAGE/</div>
            <div className="project-buttons project-content">
                <div className="project-btn" onClick={() => window.open(params.repo, "_blank")}>
                    <p>View Github</p>
                </div>
                <div className="project-btn" onClick={() => window.open(params.live, "_blank")}>
                    <p>View Live</p>
                </div>
            </div>
        </div>
    </div>)
}

export default PopUp