import { useState } from 'react'

export type TriBool = boolean | undefined

/* VALIDATION HOOKS */
function useValidator(validatorFunction:(text: string) => TriBool, initialValue:string) {
  const [ value, setValue ] = useState(initialValue)

  const isValid = validatorFunction && validatorFunction(value)

  return [ value, isValid, setValue ] as const
}

export function useEmailValidator() {
  function validateEmail(email:string):TriBool {
    if(email === '') return undefined

    const pattern = /^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9.-]+)\.([a-z.]{2,6})$/
    return !(email.match(pattern) == null) //False if null | undefined, true otherwise
  }

  return useValidator(validateEmail, '')
}

export function useTextValidator() {
  function validateText(text:string):TriBool {
    if(text === '') return undefined
    
    return text.trim().length > 0
  }

  return useValidator(validateText, '')
}

/* SUBMITION HOOKS */
type SubmitState = 'IDLE'|'LOADING'|'DONE'|'ERROR'

export function useSubmitter() {
  const [state, setState] = useState<SubmitState>('IDLE');

  async function doSubmit(name:string, email:string, message:string) {
    setState('LOADING')

    try {
      const smtpBackend = import.meta.env.VITE_SMTP_URL as string

      const response = await fetch(smtpBackend, {
        method: 'POST',
        body: JSON.stringify({
          id: import.meta.env.VITE_SMTP_ID,
          name: name,
          email: email,
          message: message
        }),
        headers: {'Content-type': 'application/json; charset=UTF-8'}
      })

      const data:{ success: boolean } = await response.json()

      if(!data.success) throw new Error()

      setState('DONE')
    } catch (error) {
      setState('ERROR')
    }
  }

  return [ state, doSubmit ] as const
}