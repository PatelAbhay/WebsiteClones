import React from 'react'
import styled from 'styled-components'
import { db } from '../firebase'

const SideBarRowContainer = styled.div`
    display:flex;
    font-size:12px;
    align-items:center;
    padding-left: 2px;
    cursor:pointer;

    :hover {
        opacity: 0.9;
        background-color: #340e36;
    }

    > h3 {
        font-weight: 500;
    }

    > h3 > span {
        padding: 15px;
    }
`;

const OptionChannel = styled.div`

`;

function SideBarRow({ Icon, title, addChannelOption }) {

    const addChannel = () => {
        const cName = prompt('Enter the name of the channel')

        if (cName) {
            db.collection('rooms').add({
                name: cName
            })
        }

    };
    const selectChannel = () => { };

    return (
        <SideBarRowContainer onClick={addChannelOption ? addChannel : selectChannel}>
            {Icon && <Icon fontSize='small' style={{ padding: 10 }} />}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
                <OptionChannel>
                    <span>#</span> {title}
                </OptionChannel>
            )}
        </SideBarRowContainer>
    )
}

export default SideBarRow
