import React from 'react'
import styled from 'styled-components'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const SideBarContainer = styled.div`
    background-color: var(--slack-color);
    color: white;
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;
`;

const SideBarHeader = styled.div`

`;

const Info = styled.div`

`;

function SideBar() {
    return (
        <SideBarContainer>
            <SideBarHeader>
                <Info>
                    <h2>IDK</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Abhay Patel
                    </h3>
                </Info>
            </SideBarHeader>
        </SideBarContainer>
    )
}

export default SideBar
