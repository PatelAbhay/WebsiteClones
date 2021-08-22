import React from 'react'
import styled from 'styled-components'

const MsgContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;

    > img{
        height:50px;
        width:50px;
        border-radius: 8px;
    }
`;

const MsgInfo = styled.div`
    padding-left: 10px;

    > h4 > span {
        color: gray;
        font-weight: 300;
        margin-left: 4px;
        font-size: 10px;
    }
`;

function Message({ message, time, user, userImage }) {
    return (
        <MsgContainer>
            <img src={userImage} alt="" />
            <MsgInfo>
                <h4>
                    {user}{' '}
                    <span>
                        {new Date(time?.toDate()).toUTCString()}
                    </span>
                </h4>
                <p>{message}</p>
            </MsgInfo>
        </MsgContainer>
    )
}

export default Message
