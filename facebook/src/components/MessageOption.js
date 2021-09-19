import React from 'react'

function MessageOption({ Icon, title, iconColor }) {
    return (
        <div className="message-option">
            <Icon style={{ color: iconColor}} />
            <h3>{title}</h3>           
        </div>
    )
}

export default MessageOption
