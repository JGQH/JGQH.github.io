import React from 'react'
import { RefDivObject } from '@Hooks/useDivRef'
import Navref from './Navref'
import './navbar.scss'

interface NavbarProps {
  references: RefDivObject[],
  names: string[]
}

export default function Navbar({ references, names }:NavbarProps) {
  return (
    <div className='port-navbar'>
      {references.map((reference, i) => (
        <Navref key={i} reference={reference} name={names[i]} />
      ))}
    </div>
  )
}