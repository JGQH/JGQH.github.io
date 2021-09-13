import { RefObject, useRef } from 'react'

export type RefDivObject = RefObject<HTMLDivElement>

export interface SectionProps {
  reference: RefDivObject
}

export default function useDivRef() {
  return useRef<HTMLDivElement>(null)
}