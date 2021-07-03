import React, { useState } from "react"

function isValidEmail(email) {
    const pattern = /^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9.-]+).([a-z.]{2,6})$/
    return email.match(pattern)
}

function isValidText(text = "") {
    return (text.trim().length > 0);
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

const Contact = ({reference}) => {
    const [detail, setDetail] = useState(null)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    async function doSubmit() {
        setDetail(null)

        const success = await fetchSubmit(name, email, message)
        setDetail(success)
    }

    return (
    <div className="port-section section-contact" ref={reference}>
        <div className="contact-title">
            <h1>Contact Me</h1>
        </div>
        <div className="contact-message">
            <p>Want to work together? Send me a message!</p>
        </div>
        <form onSubmit={e => e.preventDefault()} className="contact-form">
            <div className="form-name">
                <input type="text" placeholder="Your name" maxLength={25} onChange={e => setName(e.target.value)}/>
            </div>
            <div className="form-email">
                <input type="email" placeholder="Your email" maxLength={50} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="form-message">
                <textarea placeholder="Your message" maxLength={255} onChange={e => setMessage(e.target.value)} />
            </div>
            {detail !== null &&
            <div className="form-detail">
                {detail ?
                <p className="error-detail">Message sent succesfully!</p>
                :
                <p className="ok-detail">There's been an error</p>}
            </div>}
            <div className="form-button">
                <button onClick={doSubmit} disabled={!(isValidEmail(email) && isValidText(name) && isValidText(message))} >Submit</button>
            </div>
        </form>
    </div>)
}

export default Contact