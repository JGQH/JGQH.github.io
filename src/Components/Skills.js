const Skill = ({skillName}) => {
    return (
        <div className="skill-display">
            <div className="skill-img">
                <img src={require(`./../SVG/${skillName}.svg`).default} alt={skillName}/>
            </div>
            <div className="skill-name">
                {skillName}
            </div>
        </div>
    )
}

const Skills = () => {
    return (
    <div className="port-section section-skills">
        <div className="skills-title">
            <h1>SKILLS</h1>
        </div>
        <div className="skills-display">
            <Skill skillName="HTML" />
            <Skill skillName="CSS" />
            <Skill skillName="SASS" />
            <Skill skillName="JavaScript" />
            <Skill skillName="React JS" />
        </div>
    </div>)
}

export default Skills