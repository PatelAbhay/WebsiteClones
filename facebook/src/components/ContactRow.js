import React from 'react'

function ContactRow({ src, name }) {
    return (
        <div className="contact-row">
            <img src={src} alt=""/>
            <p>{name}</p>

            <div className="green-dot"></div>
        </div>

    )
}

export default ContactRow
