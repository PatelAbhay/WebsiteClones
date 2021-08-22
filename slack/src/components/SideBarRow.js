import React from 'react'
import styled from 'styled-components'

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

function SideBarRow({ Icon, title }) {
    return (
        <SideBarRowContainer>
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
