import React from "react"
import ContactForm from "./ContactForm"
import './contact.scss'

const Contact = ({reference}) => {
    return (
    <div className="port-section section-contact" ref={reference}>
        <div className="contact-title">
            <h1>CONTACT</h1>
        </div>
        <div className="contact-message">
            <p>Want to work together? Send me a message!</p>
        </div>
        <ContactForm />
    </div>)
}

export default Contact