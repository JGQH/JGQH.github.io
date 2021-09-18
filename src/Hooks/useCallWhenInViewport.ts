import { RefObject, useEffect } from 'react'

export default function useCallWhenInViewport(reference:RefObject<HTMLElement>, callback:() => void) {
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