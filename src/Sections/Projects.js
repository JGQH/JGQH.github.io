import Project from './../Components/Project';

const PROJECTS_LIST = [
    {
        title: "Scheduler JS",
        description: "Automatic schedule generator, oriented to my university."
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