import React from 'react'
import useDivRef from '@Hooks/useDivRef'
import './App.scss'

import Navbar from '@Sections/Navbar'
import Namer from '@Sections/Namer'
import About from '@Sections/About'
import Skills from '@Sections/Skills'
import Projects from '@Sections/Projects'
import Contact from './Sections/Contact/Contact'

export default function App() {
  const [namer, about, skills, projects, contact] = [useDivRef(), useDivRef(), useDivRef(), useDivRef(), useDivRef()]

  return (
  <>
    <Navbar references={[namer, about, skills, projects, contact]} names={['Home', 'About', 'Skills', 'Projects', 'Contact']} />
    <Namer reference={namer}/>
    <About reference={about} />
    <Skills reference={skills} />
    <Projects reference={projects} />
    <Contact reference={contact} />
  </>);
}