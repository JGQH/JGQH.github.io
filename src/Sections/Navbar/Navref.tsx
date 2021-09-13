import React from 'react'
import { RefDivObject } from '@Hooks/useDivRef'

interface NavrefProps {
  reference: RefDivObject,
  name: string
}

export default function Navref ({ reference, name }:NavrefProps) {
  function doScroll() {
    reference?.current?.scrollIntoView({
      behavior:'smooth',
      block:'nearest'
    })
  }

  return (
    <div className='navbar-ref' onClick={doScroll}>
      {name}
    </div>
  )
}