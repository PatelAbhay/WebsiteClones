import React from 'react'
import {Avatar} from "@mui/material"

function SidebarRow({ title, src, Icon }) {
    return (
        <div className="side-row">
            {src && <Avatar src={src}/>}
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
