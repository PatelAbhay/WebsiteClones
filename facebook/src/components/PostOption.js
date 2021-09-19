import React from 'react'

function PostOption({ Icon, title }) {
    return (
        <div className="post-option">
            <Icon />
            <p>{title}</p>
        </div>
    )
}

export default PostOption
