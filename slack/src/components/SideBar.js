import React from 'react'
import styled from 'styled-components'
import SideBarRow from './SideBarRow'
import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from '../firebase'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import CreateIcon from '@material-ui/icons/Create'
import InsertCommentIcon from '@material-ui/icons/InsertComment'
import InboxIcon from '@material-ui/icons/Inbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import AppsIcon from '@material-ui/icons/Apps'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AddIcon from '@material-ui/icons/Add'
import { auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

const SideBarContainer = styled.div`
    background-color: var(--slack-color);
    color: white;
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;

    > hr {
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #49274b;
    }
`;

const SideBarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;

    > .MuiSvgIcon-root {
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color: white;
        border-radius: 9999px;
        cursor:pointer;
    }
`;

const Info = styled.div`
    flex: 1;

    > h2{
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }

    > h3{
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
    }

    > h3 > .MuiSvgIcon-root {
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: green;
    }
`;

function SideBar() {

    const [channels] = useCollection(db.collection('rooms'));

    const [user] = useAuthState(auth)

    return (
        <SideBarContainer>
            <SideBarHeader>
                <Info>
                    <h2>IDK</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user.displayName}
                    </h3>
                </Info>
                <CreateIcon />
            </SideBarHeader>

            <SideBarRow Icon={InsertCommentIcon} title="Threads" />
            <SideBarRow Icon={InboxIcon} title="Mentions & Reactions" />
            <SideBarRow Icon={DraftsIcon} title="Saved Items" />
            <SideBarRow Icon={BookmarkBorderIcon} title="Channel Browser" />
            <SideBarRow Icon={PeopleAltIcon} title="People & User Groups" />
            <SideBarRow Icon={AppsIcon} title="Apps" />
            <SideBarRow Icon={FileCopyIcon} title="File Browser" />
            <SideBarRow Icon={ExpandLessIcon} title="Show Less" />
            <hr />
            <SideBarRow Icon={ExpandMoreIcon} title="Channels" />
            <hr />
            <SideBarRow Icon={AddIcon} addChannelOption title="Add Channel" />

            {channels?.docs.map(doc => (
                <SideBarRow key={doc.id} id={doc.id} title={doc.data().name} />
            ))}
        </SideBarContainer>
    )
}

export default SideBar
