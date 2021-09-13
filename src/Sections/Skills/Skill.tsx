import React from 'react'
import StackSvg from '@Components/StackSvg'
import { StackName } from '@Types'

interface SkillProps {
  skillName: StackName
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