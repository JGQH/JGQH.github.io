import React from 'react'
import Project from './Project'
import useAsync from '@Hooks/useAsync'
import useCallWhenInViewport from '@Hooks/useCallWhenInViewport'
import type { StackName } from '@Types'
import type { SectionProps } from '@Hooks/useDivRef'
import './projects.scss'

interface ProjectObject {
  name: string
  description: string
  technologies: StackName[]
  repo: string
  live: string
}

export default function Projects({ reference }:SectionProps) {
  const [ execute, value ] = useAsync<{ projects:ProjectObject[] }>(async () => {
    const url = `${import.meta.env.VITE_PROJECTS_URL}?id=${import.meta.env.VITE_PROJECTS_ID}`

    return await (await fetch(url)).json()
  })

  useCallWhenInViewport(reference, () => {
    execute()
  })

  return (
    <div className='port-section section-projects' ref={reference}>
      <div className='projects-title'>
        <h1>PROJECTS</h1>
      </div>
      <div className='projects-display'>
        {value.status === 'idle' &&
          <p>Waiting for fetch to start...</p>}
        {value.status === 'pending' &&
          <p>Fetching projects...</p>}
        {value.status === 'error' &&
          <p onClick={execute} tabIndex={0} >Error while loading ({ value.error }). Press here to reload</p>}
        {value.status === 'success' &&
          value.response.projects.map((proj, i) => <Project key={i} {...proj} />)}
      </div>
    </div>
  )
}