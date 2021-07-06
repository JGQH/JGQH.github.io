import React from 'react'
import './stackSvg.scss'

const StackSvg = ({ name }) => {
    return <img className="stack-svg" src={`/SVG/${name}.svg`} alt={name} />
}

export default StackSvg