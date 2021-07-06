import React from "react"
import { useEmailValidator, useTextValidator, useSubmitter } from './ContactHooks'

function getClassName(tribool) {
    return (tribool === undefined) ? "" : (tribool ? 'field-ok' : 'field-error')
}

const ContactForm = () => {
    const [state, doSubmit] = useSubmitter()
    const [name, isNameValid, setName] = useTextValidator()
    const [email, isEmailValid, setEmail] = useEmailValidator()
    const [message, isMessageValid, setMessage] = useTextValidator()

    return (
    <form onSubmit={e => e.preventDefault()} className="contact-form">
        <div className={`form-name ${getClassName(isNameValid)}`}>
            <input type="text" placeholder="Your name" maxLength={25} onChange={e => setName(e.target.value)} disabled={state === "DONE"} />
        </div>
        <div className={`form-email ${getClassName(isEmailValid)}`}>
            <input type="email" placeholder="Your email" maxLength={50} onChange={e => setEmail(e.target.value)} disabled={state === "DONE"} />
        </div>
        <div className={`form-message ${getClassName(isMessageValid)}`}>
            <textarea placeholder="Your message" maxLength={255} onChange={e => setMessage(e.target.value)} disabled={state === "DONE"} />
        </div>
        <div className="form-detail">
            {state === "DONE" && <p className="ok-detail">Message sent succesfully!</p>}
            {state === "ERROR" && <p className="error-detail">There's been an error</p>}
            {state === "LOADING" && <p>Submitting...</p>}
        </div>
        <div className="form-button">
            <button onClick={() => doSubmit(name, email, message)} disabled={(state === "DONE") || !(isEmailValid && isNameValid && isMessageValid)}>Submit</button>
        </div>
    </form>)
}

export default ContactForm