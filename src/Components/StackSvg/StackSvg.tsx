import React, { HTMLAttributes } from 'react'
import './stackSvg.scss'

interface StackSvgProps extends Omit<HTMLAttributes<HTMLImageElement>, 'className'|'src'|'alt'> {
  name: string
}

export default function StackSvg({ name, ...rest}:StackSvgProps) {
  return <img className='stack-svg' src={`/SVG/${name}.svg`} alt={name} {...rest} />
}