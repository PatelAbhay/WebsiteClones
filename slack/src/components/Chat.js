import React from 'react'
import styled from 'styled-components'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import { useSelector } from 'react-redux';
import { selectRoomId } from '../features/appSlice'
import ChatInput from './ChatInput'
import { useCollection, useDocument } from 'react-firebase-hooks/firestore'
import { db } from '../firebase'

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

function Chat() {

    const roomId = useSelector(selectRoomId);

    const [roomDetails] = useDocument(
        roomId && db.collection('rooms').doc(roomId)
    )

    const [roomMsgs] = useCollection(
        roomId && db.collection('rooms').doc(roomId).collection('messages').orderBy('time', 'asc')
    )

    return (
        <ChatContainer>
            <ChatHeader>
                <Left>
                    <h4>
                        <strong>#Room Name</strong>
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
            </ChatMessages>
            <ChatInput channelName={roomDetails?.data().name} channelId={roomId} />
        </ChatContainer>
    )
}

export default Chat
