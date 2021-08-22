import React from 'react'
import styled from 'styled-components'

const SideBarRowContainer = styled.div`

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
