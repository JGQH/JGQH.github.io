import Skill from './../Components/Skill'

const Skills = ({reference}) => {
    return (
    <div className="port-section section-skills" ref={reference} >
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