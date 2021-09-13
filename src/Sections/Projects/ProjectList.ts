interface ProjectObject {
  name: string
  description: string
  technologies: string[]
  repo: string
  live: string
}

const ProjectsList:ProjectObject[] = [
  {
    name: '3D Game of Life',
    description: "3D simulation of Conway's Game of Life, built using ThreeJS (Along with its utility library Drei) ",
    technologies: ['HTML', 'SASS', 'React JS'],
    repo: 'https://github.com/JGQH/GOL-3D',
    live: 'https://jgqh.github.io/GOL-3D/'
  },
  {
    name: 'YGO Decks Prices',
    description: 'Price calculator for YDK files. The recollection of said prices occurs in the Express API.',
    technologies: ['HTML', 'SASS', 'React JS', 'Node JS', 'Mongo DB'],
    repo: 'https://github.com/JGQH/ygo-decks-prices',
    live: 'https://ygodp.netlify.app/'
  },
  {
    name: 'Scheduler JS',
    description: 'Schedule generator for my university classes, created using Next JS',
    technologies: ['HTML', 'SASS', 'React JS', 'Next JS'],
    repo: 'https://github.com/JGQH/Schedule-JS',
    live: 'https://jgqh.github.io/Schedule-JS/'
  },
  {
    name: 'Portfolio',
    description: 'Showcase of my developer skills, created using Vite',
    technologies: ['HTML', 'SASS', 'React JS'],
    repo: 'https://github.com/JGQH/JGQH.github.io',
    live: 'https://jgqh.github.io/'
  }
]

export default ProjectsList