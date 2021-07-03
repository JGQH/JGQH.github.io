import React from "react"

const Skill = ({skillName}) => {
    return (
        <div className="skill-display">
            <div className="skill-img">
                <img src={`./src/SVG/${skillName}.svg`} alt={skillName}/>
            </div>
            <div className="skill-name">
                {skillName}
            </div>
        </div>
    )
}

export default Skill