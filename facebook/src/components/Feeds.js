import React, { useEffect, useState } from 'react'
import "../css/Feed.css"
import MessageCreation from './MessageCreation'
import Post from './Post'
import Stories from './Stories'
import { db } from '../firebase'

function Feeds() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', "desc").onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        ))
    }, [])

    return (
        <div className="feed-container">
            <Stories />
            <MessageCreation />
            
            {posts.map(post => (
                <Post 
                key={post.data.id}
                profilePic={post.data.profilePic}
                image={post.data.image}
                username={post.data.username}
                timestamp={post.data.timestamp}
                message={post.data.message}/>
            ))}
        </div>
    )
}

export default Feeds
