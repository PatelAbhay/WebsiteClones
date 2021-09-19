import { Avatar } from '@mui/material'
import React from 'react'
import PostOption from './PostOption'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareIcon from '@mui/icons-material/Share';

function Post({ profilePic, image, username, timestamp, message }) {
    return (
        <div className="post-container">
            <div className="post-top">
                <Avatar src={profilePic} className="post-avatar"/>

                <div className="post-top-info">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>

            <div className="post-bottom">
                <p>{message}</p>
            </div>

            <div className="post-image">
                <img src={image} alt=""/>
            </div>

            <div className="options-container">
                <PostOption Icon={ThumbUpOutlinedIcon} title="Like"/>
                <PostOption Icon={ChatOutlinedIcon} title="Comment"/>
                <PostOption Icon={ShareIcon} title="Share"/>
            </div>
        </div>
    )
}

export default Post
