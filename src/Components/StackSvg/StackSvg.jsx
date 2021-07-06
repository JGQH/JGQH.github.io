import React from 'react'
import './stackSvg.scss'

const StackSvg = ({ name, ...rest}) => {
    return <img className="stack-svg" src={`/SVG/${name}.svg`} alt={name} {...rest} />
}

export default StackSvg