import React from 'react';
import Project from '../Components/Project';

const PROJECTS_LIST = [
    {
        name: "3D Game of Life",
        description: "3D simulation of Conway's Game of Life, built using ThreeJS (Along with its utility library Drei) ",
        technologies: ["HTML", "SASS", "React JS"],
        repo: "https://github.com/JGQH/GOL-3D",
        live: "https://jgqh.github.io/GOL-3D/"
    },
    {
        name: "YGO Decks Prices",
        description: "Price calculator for YDK files. The recollection of said prices occurs in the Express API.",
        technologies: ["HTML", "SASS", "React JS", "Node JS", "Mongo DB"],
        repo: "https://github.com/JGQH/ygo-decks-prices",
        live: "https://ygodp.netlify.app/"
    },
    {
        name: "Scheduler JS",
        description: "Schedule generator for my university classes",
        technologies: ["HTML", "SASS", "React JS"],
        repo: "https://github.com/JGQH/Schedule-JS",
        live: "https://jgqh.github.io/Schedule-JS/"
    },
    {
        name: "Portfolio",
        description: "Showcase of my developer skills",
        technologies: ["HTML", "SASS", "React JS"],
        repo: "https://github.com/JGQH/JGQH.github.io",
        live: "https://jgqh.github.io/"
    }
]

const Projects = ({reference}) => {
    return (
    <div className="port-section section-projects" ref={reference}>
        <div className="projects-title">
            <h1>PROJECTS</h1>
        </div>
        <div className="projects-display">
            {PROJECTS_LIST.map((proj, i) => (
                <Project key={i} {...proj} />
            ))}
        </div>
    </div>)
}

export default Projects