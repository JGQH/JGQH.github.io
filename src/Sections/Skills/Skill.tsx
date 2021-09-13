import React from 'react'
import StackSvg from '@Components/StackSvg'

interface SkillProps {
  skillName: string
}

export default function Skill ({ skillName }:SkillProps) {
  return (
    <div className='skill-display'>
      <div className='skill-img'>
        <StackSvg name={skillName} />
      </div>
      <div className='skill-name'>
        {skillName}
      </div>
    </div>
  )
}