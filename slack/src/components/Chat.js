import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import { useSelector } from 'react-redux';
import { selectRoomId } from '../features/appSlice'
import ChatInput from './ChatInput'
import { useCollection, useDocument } from 'react-firebase-hooks/firestore'
import { db } from '../firebase'
import Message from './Message';

const ChatContainer = styled.div`
    flex:0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 60px;
`;

const ChatHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;
`;

const Left = styled.div`
    display: flex;
    align-items: center;
    
    > h4{
        display: flex;
        text-transform: lowerCase;
    }

    .MuiSvgIcon-root{
        margin-left: 10px;
        font-size: 18px;
    }
`;

const Right = styled.div`
    > p {
        display: flex;
        align-items: center;
        font-size: 14px;
    }

    > p > .MuiSvgIcon-root {
        margin-right: 5px !important;
        font-size: 16px;
    }
`;

const ChatMessages = styled.div`

`;

const ChatBottom = styled.div`
    padding-bottom:200px;
`;

function Chat() {

    const roomId = useSelector(selectRoomId);

    const [roomDetails] = useDocument(
        roomId && db.collection('rooms').doc(roomId)
    )

    const [roomMsgs, loading] = useCollection(
        roomId && db.collection('rooms').doc(roomId).collection('messages').orderBy('time', 'asc')
    )

    const chatRef = useRef(null)

    useEffect(() => {
        chatRef?.current?.scrollIntoView({
            behavior: 'smooth'
        });
    }, [roomId, loading])

    return (
        <ChatContainer>
            {roomDetails && roomMsgs && (
                <>
                    <ChatHeader>
                        <Left>
                            <h4>
                                <strong>#{roomDetails?.data().name}</strong>
                            </h4>
                            <StarBorderOutlinedIcon />
                        </Left>

                        <Right>
                            <p>
                                <InfoOutlinedIcon /> Details
                            </p>
                        </Right>
                    </ChatHeader>
                    <ChatMessages>
                        {/* List out your messages */}
                        {roomMsgs?.docs.map(doc => {
                            const { message, time, user, userImage } = doc.data();

                            return (
                                <Message
                                    key={doc.id}
                                    message={message}
                                    time={time}
                                    user={user}
                                    userImage={userImage}
                                />
                            )
                        })}

                        <ChatBottom ref={chatRef} />
                    </ChatMessages>
                    <ChatInput chatRef={chatRef} channelName={roomDetails?.data().name} channelId={roomId} />
                </>
            )}
        </ChatContainer>
    )
}

export default Chat
