import { useEffect, useState } from 'react'
import { RefDivObject } from './useDivRef'

export default function useCallWhenInViewport(reference:RefDivObject, callback:() => void) {
  useEffect(() => {
    const divElement = reference.current

    const observer = new IntersectionObserver(([ entry ]) => {
      if(entry.isIntersecting) {
        callback()

        if(divElement) observer.unobserve(divElement)
      }
    }, { root: null, rootMargin: '0px', threshold: 0.1 })

    if(divElement) observer.observe(divElement)

    return () => {
      if(divElement) observer.unobserve(divElement)
    }
  }, [reference])
}