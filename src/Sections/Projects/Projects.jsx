import React from 'react';
import Project from './Project';
import ProjectsList from './ProjectList';
import './projects.scss'

const Projects = ({reference}) => {
    return (
    <div className="port-section section-projects" ref={reference}>
        <div className="projects-title">
            <h1>PROJECTS</h1>
        </div>
        <div className="projects-display">
            {ProjectsList.map((proj, i) => (
                <Project key={i} {...proj} />
            ))}
        </div>
    </div>)
}

export default Projects