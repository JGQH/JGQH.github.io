import React from 'react';
import { useRef } from 'react';
import './App.scss'

import Namer from './Sections/Namer/Namer';
import About from './Sections/About/About';
import Skills from './Sections/Skills/Skills';
import Navbar from './Sections/Navbar/Navbar';
import Projects from './Sections/Projects/Projects';
import Contact from './Sections/Contact/Contact';

function App() {
  const [namer, about, skills, projects, contact] = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)]

  return (
  <>
    <Navbar references={[namer, about, skills, projects, contact]} names={["Home", "About", "Skills", "Projects", "Contact"]} />
    <Namer reference={namer}/>
    <About reference={about} />
    <Skills reference={skills} />
    <Projects reference={projects} />
    <Contact reference={contact} />
  </>);
}

export default App;