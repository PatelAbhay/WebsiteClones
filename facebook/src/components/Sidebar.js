import React from 'react'
import '../css/Sidebar.css'
import SidebarRow from './SidebarRow'
import GroupIcon from '@mui/icons-material/Group';
import GroupsIcon from '@mui/icons-material/Groups';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import TvIcon from '@mui/icons-material/Tv';
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStateValue } from '../StateProvider';

function Sidebar() {

    const [{ user }, dispatch] = useStateValue()

    return (
        <div className="sidebar">
            <SidebarRow title={user.displayName} src={user.photoURL}/>
            <SidebarRow title="Friends" Icon={GroupIcon}/>
            <SidebarRow title="Groups" Icon={GroupsIcon}/>
            <SidebarRow title="Marketplace" Icon={ShoppingBagIcon}/>
            <SidebarRow title="Watch" Icon={TvIcon}/>
            <SidebarRow title="Events" Icon={EventIcon}/>
            <SidebarRow title="Memories" Icon={AccessTimeIcon}/>
            <SidebarRow title="See More" Icon={ExpandMoreIcon}/>
        </div>
    )
}

export default Sidebar
