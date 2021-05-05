import { useRef } from 'react';

import Namer from './Sections/Namer';
import About from './Sections/About';
import Skills from './Sections/Skills';
import Navbar from './Sections/Navbar';
import Projects from './Sections/Projects';

function App() {
  const [namer, about, skills, projects] = [useRef(null), useRef(null), useRef(null), useRef(null)]

  return (
  <>
    <Navbar references={[namer, about, skills, projects]} names={["Home", "About", "Skills", "Projects"]} />
    <Namer reference={namer}/>
    <About reference={about} />
    <Skills reference={skills} />
    <Projects reference={projects} />
  </>);
}

export default App;