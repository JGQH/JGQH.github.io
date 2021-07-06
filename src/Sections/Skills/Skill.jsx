import React from "react"
import StackSvg from '@StackSvg'

const Skill = ({skillName}) => {
    return (
        <div className="skill-display">
            <div className="skill-img">
                <StackSvg name={skillName} />
            </div>
            <div className="skill-name">
                {skillName}
            </div>
        </div>
    )
}

export default Skill