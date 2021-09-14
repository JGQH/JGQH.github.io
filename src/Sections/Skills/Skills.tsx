import React from 'react'
import Skill from './Skill'
import { SectionProps } from '@Hooks/useDivRef'
import './skills.scss'

const Skills = ({ reference }:SectionProps) => {
  return (
    <div className='port-section section-skills' ref={reference} >
      <div className='skills-title'>
        <h1>SKILLS</h1>
      </div>
      <div className='skills-display'>
        <Skill skillName='HTML' />
        <Skill skillName='CSS' />
        <Skill skillName='SASS' />
        <Skill skillName='JavaScript' />
        <Skill skillName='TypeScript' />
        <Skill skillName='React JS' />
        <Skill skillName='Next JS' />
        <Skill skillName='Node JS' />
        <Skill skillName='Mongo DB' />
      </div>
    </div>
  )
}

export default Skills