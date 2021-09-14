import React from 'react'
import StackSvg from '@Components/StackSvg'
import JButton from '@Components/JButton'
import { ProjectObject } from './ProjectList'

export default function Project({ name, description, technologies, repo, live }:ProjectObject) {
  return (
    <div className='project-container'>
      <div className='project-image'>
        <img src={`/Images/${name}.png`} alt={`View of ${name}`}/>
      </div>
      <div className='project-name project-block'>
        <h1>{name}</h1>
      </div>
      <div className='project-description project-block'>
        <p>{description}</p>
      </div>
      <div className='project-technologies project-block'>
        {technologies.map((technology, i) => (
          <StackSvg key={i} name={technology} />
        ))}
      </div>
      <div className='project-buttons'>
        <JButton onClick={() => window.open(repo, '_blank')}>View Repo</JButton>
        <JButton onClick={() => window.open(live, '_blank')}>View Live</JButton>
      </div>
    </div>
  )
}