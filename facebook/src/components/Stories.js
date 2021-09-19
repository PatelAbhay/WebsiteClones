import React from 'react'
import "../css/Stories.css"
import StoryCard from './StoryCard'

function Stories() {
    
    const stories = [
        {
            name: 'Who dis',
            src: 'https://pbs.twimg.com/media/DDNAVF9U0AAQW_8.jpg',
            profile: 'https://yt3.ggpht.com/cQQoRyKQdpZO15ZAU7WArgYQZU9sRr_LhRy5sZY2ONVytRN7y5Vgpr9Dqn3UGXrXokev_uVchbs=s900-c-k-c0x00ffffff-no-rj'
        },
        {
            name: 'The Zucc',
            src: 'https://links.papareact.com/xql',
            profile: 'https://links.papareact.com/snf'
        },
        {
            name: 'Chad Musk',
            src: 'https://links.papareact.com/4zn',
            profile: 'https://links.papareact.com/kxk'
        },
        {
            name: 'Jeffy Boi',
            src: 'https://links.papareact.com/k2j',
            profile: 'https://links.papareact.com/f0p'
        },
        {
            name: 'Big Boi Bill',
            src: 'https://links.papareact.com/4u4',
            profile: 'https://links.papareact.com/zvy'
        },
    ];

    return (
        <div className="stories-container">
            {stories.map(story => (
                <StoryCard
                    title={story.name}
                    image={story.src}
                    profile={story.profile} />
            ))}
        </div>
    )
}

export default Stories
