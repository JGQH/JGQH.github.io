import React from 'react'
import useAsync from '@Hooks/useAsync'
import JButton from '@Components/JButton'
import { useEmailValidator, useTextValidator, sendForm, TriBool } from '@Hooks/useValidators'

function getClassName(tribool:TriBool) {
  return (tribool === 'unknown') ? '' : (tribool ? 'field-ok' : 'field-error')
}

export default function ContactForm() {
  const [name, isNameValid, setName] = useTextValidator()
  const [email, isEmailValid, setEmail] = useEmailValidator()
  const [message, isMessageValid, setMessage] = useTextValidator()

  const [ doSubmit, submitting ] = useAsync(() => sendForm(name, email, message))

  const submitDisabled = (submitting.status === 'success') || !((isEmailValid === true) && (isNameValid === true) && (isMessageValid === true))
  
  return (
    <form onSubmit={e => e.preventDefault()} className='contact-form'>
      <div className={`form-name ${getClassName(isNameValid)}`}>
        <input type='text' placeholder='Your name' maxLength={25} onChange={e => setName(e.target.value)} disabled={submitting.status === 'success'} />
      </div>
      <div className={`form-email ${getClassName(isEmailValid)}`}>
        <input type='email' placeholder='Your email' maxLength={50} onChange={e => setEmail(e.target.value)} disabled={submitting.status === 'success'} />
      </div>
      <div className={`form-message ${getClassName(isMessageValid)}`}>
        <textarea placeholder='Your message' maxLength={255} onChange={e => setMessage(e.target.value)} disabled={submitting.status === 'success'} />
      </div>
      <div className='form-detail'>
        {submitting.status === 'success' &&
          <p className='ok-detail'>Message sent succesfully!</p>}
        {submitting.status === 'error' &&
          <p className='error-detail'>There's been an error</p>}
        {submitting.status === 'pending' &&
          <p>Submitting...</p>}
      </div>
      <div className='form-button'>
        <JButton onClick={doSubmit} disabled={submitDisabled}>Submit</JButton>
      </div>
    </form>
  )
}