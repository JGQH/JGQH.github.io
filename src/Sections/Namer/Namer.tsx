import React, { CSSProperties } from 'react'
import { useState, useEffect } from 'react'
import { SectionProps } from '@Hooks/useDivRef'
import './namer.scss'

const NAME = "JUAN⠀QUISPE"
const DURATION = 1000; //MiliSeconds

interface LetterProps {
  char: string
  delay: number
}

function Letter ({ char, delay }:LetterProps) {
  const style = { '--delay': delay } as CSSProperties
  const [className, setClassName] = useState('namer-intro')

  useEffect(() => {
    let sto = setTimeout(() => {
      setClassName('namer-movement')
    }, 200 * delay + DURATION)

    return () => clearTimeout(sto);
  }, [delay])

  return <h1 className={className} {...{style}}>{char}</h1>
}

export default function Namer ({ reference }:SectionProps) {
  const style = { '--duration': DURATION } as CSSProperties

  return (
    <div className='port-section section-namer' ref={reference}>
      <p>Hi, my name is</p>
      <div className='namer-text' {...{ style }}>
        {NAME.split('').map((char, index) => (
          <Letter key={index} char={char} delay={index} />
        ))}
      </div>
      <p>and I'm a Front-End developer</p>
    </div>
  )
}