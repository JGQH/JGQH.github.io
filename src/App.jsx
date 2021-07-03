import React from 'react';
import { useRef } from 'react';

import Namer from './Sections/Namer';
import About from './Sections/About';
import Skills from './Sections/Skills';
import Navbar from './Sections/Navbar';
import Projects from './Sections/Projects';
import Contact from './Sections/Contact';

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