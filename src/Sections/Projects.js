import Project from './../Components/Project';

const PROJECTS_LIST = [
    {
        title: "Portfolio",
        description: "Showcase of my developer skills",
        technologies: ["HTML", "SASS", "React JS"],
        repo: "https://github.com/JGQH/JGQH.github.io",
        live: "https://jgqh.github.io/"
    },
    {
        title: "Scheduler JS",
        description: "Automatic schedule generator, oriented to my university.",
        technologies: ["HTML", "SASS", "React JS"],
        repo: "https://github.com/JGQH/Schedule-JS",
        live: "https://jgqh.github.io/Schedule-JS/"
    }
];

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