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

export default Skill