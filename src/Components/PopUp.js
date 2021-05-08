const PopUp = params => {
    return (
    <div className="project-popup" onClick={params.onClick}>
        <div className="project-box" onClick={e => e.stopPropagation()}>
            <div className="project-title">
                <h1>{params.title}</h1>
            </div>
            <div className="project-content">
                <div className="project-description">
                    <p>{params.description}</p>
                </div>
                <div className="project-technologies">
                    <ul>
                    {params.technologies.map((technology, i) => (
                        <li key={i}>{technology}</li>
                    ))}
                    </ul>
                </div>
                <div className="project-images">//IMAGE//</div>
                <div className="project-buttons">
                    <div className="project-btn" onClick={() => window.open(params.repo, "_blank")}>
                        <p>View Github</p>
                    </div>
                    <div className="project-btn" onClick={() => window.open(params.live, "_blank")}>
                        <p>View Live</p>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default PopUp