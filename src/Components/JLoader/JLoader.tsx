import React, { DetailedHTMLProps, HTMLAttributes, RefObject } from 'react'
import './jloader.scss'

type JLoaderProps = Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'> & {
  reference?:RefObject<HTMLDivElement>
}

export default function JLoader({ className, children, reference, ...rest }:JLoaderProps) {
  const extendedClass = `${className || ''} component-jloader`

  return <div className={extendedClass} {...rest} ref={reference}>
    {children}
  </div>
}