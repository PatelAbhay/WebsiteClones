import React, { useState } from 'react'
import "../css/MessageCreation.css"
import {Avatar} from "@mui/material"
import MessageOption from './MessageOption';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useStateValue } from '../StateProvider';
import { db } from '../firebase'
import firebase from 'firebase'

function MessageCreation() {
    
    const [{ user }, dispatch] = useStateValue()
    const [input, setInput] = useState('')
    const [imageURL, setImageURL] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(db.collection('posts'))

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageURL,
        })

        setInput("")
        setImageURL("")
    }

    return (
        <div className="message-container">
            <div className="message-top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} className="message-content" 
                    type="text" placeholder={`What's on your mind, ${user.displayName}`} />
                    <input value={imageURL} onChange={e => setImageURL(e.target.value)} className="message-image" 
                    type="text" placeholder="Image URL (Optional)" />
                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
                    </button>
                </form>
            </div>
            <div className="message-bottom">
                <MessageOption Icon={VideocamIcon} title="Live Video" iconColor="red"/>
                <MessageOption Icon={PhotoLibraryIcon} title="Photo/Video" iconColor="green"/>
                <MessageOption Icon={InsertEmoticonIcon} title="Feeling/Activity" iconColor="orange"/>
            </div>
        </div>
    )
}

export default MessageCreation
