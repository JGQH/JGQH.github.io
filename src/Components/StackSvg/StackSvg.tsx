import React, { HTMLAttributes, useRef, useState } from 'react'
import type { StackName, ContactName } from '@Types'
import './stackSvg.scss'
import useCallWhenInViewport from '@Hooks/useCallWhenInViewport'
import JLoader from '@Components/JLoader'

interface StackSvgProps extends Omit<HTMLAttributes<HTMLImageElement>, 'className'|'src'|'alt'|'onLoad'> {
  name: StackName | ContactName
}

export default function StackSvg({ name, ...rest}:StackSvgProps) {
  const [ isLoaded, setLoaded ] = useState<boolean>(false)
  const imgSvg = useRef<HTMLImageElement>(null)
  const loaderDiv = useRef<HTMLDivElement>(null)

  useCallWhenInViewport(imgSvg, () => {
    const img = imgSvg.current

    if(img) {
      img.src = `/SVG/${name}.svg`
    }
  })

  return <>
    {!isLoaded && <JLoader reference={loaderDiv} className='component-jsvg' />}
    <img ref={imgSvg} className={isLoaded ? 'component-jsvg' : ''} alt={name} onLoad={() => setLoaded(true)} {...rest} />    
  </>
}