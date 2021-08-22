import { Button } from '@material-ui/core';
import React, { useState } from 'react'
import styled from 'styled-components'
import { db } from '../firebase'
import firebase from 'firebase'

const InputContainer = styled.div`
    border-radius: 20px;

    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }

    > form > input {
        position: fixed;
        bottom:30px;
        width: 60%;
        border-radius: 3px;
        padding:20px;
        outline: none;
    }

    > form > button {
        display: none !important;
    }
`;

function ChatInput({ chatRef, channelName, channelId }) {

    const [input, setInput] = useState('');

    const sendMessage = e => {
        e.preventDefault(); // prevents refresh

        if (!channelId) {
            return false;
        }

        db.collection('rooms').doc(channelId).collection('messages').add({
            message: input,
            time: firebase.firestore.FieldValue.serverTimestamp(),
            user: 'Abhay',
            userImage: 'https://i.kym-cdn.com/entries/icons/original/000/027/100/_103330503_musk3.jpg'
        });

        chatRef?.current?.scrollIntoView({
            behavior: 'smooth'
        });

        setInput('');

    }

    return (
        <InputContainer>
            <form>
                <input value={input} onChange={e => setInput(e.target.value)} placeholder={`Message #${channelName}`} />
                <Button hidden type="submit" onClick={sendMessage}>
                    Send
                </Button>
            </form>
        </InputContainer>
    )
}

export default ChatInput
