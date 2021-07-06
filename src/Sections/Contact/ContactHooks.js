import { useState, useReducer } from 'react'

/* VALIDATION HOOKS */
function useValidator(validatorFunction, initialValue) {
    const [ value, setValue ] = useState(initialValue)

    const isValid = validatorFunction && validatorFunction(value)

    return [ value, isValid, setValue ]
}

export function useEmailValidator() {
    function validateEmail(email) {
        if(email === "") return undefined
    
        const pattern = /^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9.-]+)\.([a-z.]{2,6})$/
        return email.match(pattern)
    }

    return useValidator(validateEmail, "")
}

export function useTextValidator() {
    function validateText(text) {
        if(text === "") return undefined
        
        return (text.trim().length > 0);
    }

    return useValidator(validateText, "")
}

/* SUBMITION HOOKS */
export function useSubmitter() {
    const [state, setState] = useState("IDLE");

    async function doSubmit(name, email, message) {
        setState("LOADING")

        try {
            const response = await fetch(import.meta.env.VITE_SMTP, {
                method: "POST",
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message
                }),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            })
    
            const data = await response.json()

            setState(data["success"] ? "DONE" : "ERROR")
        } catch (error) {
            setState("ERROR")
        }
    }

    return [ state, doSubmit ]
}