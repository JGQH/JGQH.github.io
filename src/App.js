import { useRef } from 'react';

import Namer from './Sections/Namer';
import About from './Sections/About';
import Skills from './Sections/Skills';
import Navbar from './Sections/Navbar';

function App() {
  const [namer, about, skills] = [useRef(null), useRef(null), useRef(null)]

  return (
  <>
    <Navbar references={[namer, about, skills]} names={["Home", "About", "Skills"]} />
    <Namer reference={namer}/>
    <About reference={about} />
    <Skills reference={skills} />
  </>);
}

export default App;