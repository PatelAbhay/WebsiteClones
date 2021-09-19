import React from 'react'
import "../css/Header.css"

function HeaderOption({ Icon, active }) {
    return (
        <div className={`option ${active && "active"}`}>
            <Icon fontSize="medium" />
        </div>
    )
}

export default HeaderOption
