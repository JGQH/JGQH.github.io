import React from "react";
import StackSvg from '@StackSvg'

const Project = params => {
    const { name, description, technologies, repo, live } = params;
    return (
    <div className="project-container">
        <div className="project-image">
            <img src={`/Images/${name}.png`} alt={`View of ${name}`}/>
        </div>
        <div className="project-name project-block">
            <h1>{name}</h1>
        </div>
        <div className="project-description project-block">
            <p>{description}</p>
        </div>
        <div className="project-technologies project-block">
            {technologies.map((technology, i) => (
                <StackSvg key={i} name={technology} />
            ))}
        </div>
        <div className="project-buttons">
            <div className="project-redirect" onClick={() => window.open(repo, "_blank")}>
                <p>View Repo</p>
            </div>
            <div className="project-redirect" onClick={() => window.open(live, "_blank")}>
                <p>View Live</p>
            </div>
        </div>
    </div>)
}

export default Project