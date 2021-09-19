import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import {Avatar, IconButton} from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "../css/Header.css"
import HeaderOption from './HeaderOption';
import { useStateValue } from '../StateProvider';

function Header() {
    
    const [{ user }, dispatch] = useStateValue()
    
    return (
        <header>
            <div className="left">
                <img src="./facebook-logo.svg" alt=""/>
                <div className="input-container">
                    <SearchIcon />
                    <input type="text" placeholder="Search Facebook" />
                </div>
            </div>
            <div className="middle">
                <HeaderOption Icon={HomeOutlinedIcon} active />
                <HeaderOption Icon={FlagOutlinedIcon} />
                <HeaderOption Icon={PlayCircleOutlineIcon} />
                <HeaderOption Icon={ShoppingCartOutlinedIcon} />
                <HeaderOption Icon={GroupsOutlinedIcon} />
            </div>
            <div className="right">
                <div className="avatar-container">
                    <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </header>
    )
}

export default Header
