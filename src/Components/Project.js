const Project = ({title, description}) => {
    return (
    <div className="project-display">
        <div className="project-title">
            <h1>{title}</h1>
        </div>
        <hr className="project-separator" />
        <div className="project-description">
            <p>{description}</p>
        </div>
    </div>)
}

export default Project