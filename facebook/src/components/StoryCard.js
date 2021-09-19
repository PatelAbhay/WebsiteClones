import React from 'react'
import {Avatar} from "@mui/material"

function StoryCard({ image, profile, title }) {
    return (
        <div style={{backgroundImage: `url(${image})`}} className="story-card">
            <Avatar className="story-avatar" src={profile} />
            <h4>{title}</h4>

        </div>
    )
}

export default StoryCard
