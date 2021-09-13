import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import './jbutton.scss'

type JButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export default function JButton({ className, children, ...props }:JButtonProps) {
  const extendedClass = `${className || ''} component-jbutton`

  return (
    <button className={extendedClass} {...props}>
      {children}
    </button>
  )
}