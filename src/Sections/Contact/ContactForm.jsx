import React, { useState } from "react"

function validateEmail(email) {
    if(email === "") return undefined
    
    const pattern = /^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9.-]+)\.([a-z.]{2,6})$/
    return email.match(pattern)
}

function validateText(text) {
    if(text === "") return undefined
    
    return (text.trim().length > 0);
}

function getClassName(tribool) {
    return (tribool === undefined) ? "" : (tribool ? 'field-ok' : 'field-error')
}

async function fetchSubmit(name, email, msg) {
    try {
        const response = await fetch(import.meta.env.VITE_SMTP, {
            method: "POST",
            body: JSON.stringify({
                name: name,
                email: email,
                message: msg
            }),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })

        const data = await response.json()

        return data.success;
    } catch (error) {
        return false
    }
}

const ContactForm = () => {
    const [detail, setDetail] = useState(null)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const isNameValid = validateText(name)
    const isEmailValid = validateEmail(email)
    const isMessageValid = validateText(message)

    async function doSubmit() {
        setDetail(null)

        const success = await fetchSubmit(name, email, message)
        setDetail(success)
    }

    return (
    <form onSubmit={e => e.preventDefault()} className="contact-form">
        <div className={`form-name ${getClassName(isNameValid)}`}>
            <input type="text" placeholder="Your name" maxLength={25} onChange={e => setName(e.target.value)} disabled={detail} />
        </div>
        <div className={`form-email ${getClassName(isEmailValid)}`}>
            <input type="email" placeholder="Your email" maxLength={50} onChange={e => setEmail(e.target.value)} disabled={detail} />
        </div>
        <div className={`form-message ${getClassName(isMessageValid)}`}>
            <textarea placeholder="Your message" maxLength={255} onChange={e => setMessage(e.target.value)} disabled={detail} />
        </div>
        {detail !== null &&
        <div className="form-detail">
            {detail ?
            <p className="ok-detail">Message sent succesfully!</p>
            :
            <p className="error-detail">There's been an error</p>}
        </div>}
        <div className="form-button">
            <button onClick={doSubmit} disabled={detail || !(isEmailValid && isNameValid && isMessageValid)}>Submit</button>
        </div>
    </form>)
}

export default ContactForm