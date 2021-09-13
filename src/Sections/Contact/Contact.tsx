import React from 'react'
import ContactForm from "./ContactForm"
import StackSvg from '@Components/StackSvg'
import { SectionProps } from '@Hooks/useDivRef'
import './contact.scss'

const GithubProfile = 'https://github.com/JGQH'

const Contact = ({ reference }:SectionProps) => {
  return (
    <div className='port-section section-contact' ref={reference}>
      <div className='contact-title'>
        <h1>CONTACT</h1>
      </div>
      <div className='contact-message'>
        <p>Want to work together? Send me a message!</p>
      </div>
      <ContactForm />
      <div className='contact-media'>
        <StackSvg name='Github' onClick={() => window.open(GithubProfile, '_blank')} />
      </div>
    </div>
  )
}

export default Contact