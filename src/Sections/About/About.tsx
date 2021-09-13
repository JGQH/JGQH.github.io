import React from 'react'
import { SectionProps } from '@Hooks/useDivRef'
import './about.scss'

export default function About ({ reference }:SectionProps) {
  return (
    <div className="port-section section-about" ref={reference}>
      <div className="about-title">
        <h1>ABOUT ME</h1>
      </div>
      <div className="about-content">
        <p>Hello. As mentioned above, my name is Juan Quispe. I originally wanted to learn backend, but <b>JavaScript</b> (And later <b>React JS</b>) and its syntax similarity with <b>AS3</b> was enough to keep me here.</p>
        <p>Although I said I'm a Front-End developer, I have basic Back-End skills (Mainly, due to some projects requiring it)</p>
      </div>
    </div>
  )
}