import { useRef } from 'react';

import Namer from './Components/Namer';
import About from './Components/About';
import Skills from './Components/Skills';
import Navbar from './Components/Navbar';

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