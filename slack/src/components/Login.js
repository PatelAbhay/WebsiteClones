import { Button } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase'

const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height:100vh;
    display: grid;
    place-items: center;
`;

const Inner = styled.div`
    padding: 100px;
    text-align: center;
    background-color: white;
    border-radius:10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    
    > img {
        object-fit: contain;
        height:200px;
        margin-bottom: 40px;
    }

    > button {
        margin-top: 50px;
        text-transform: inherit !important;
        background-color: #0a8d48;
        color: white;
    }
`;

function Login() {

    const signIn = e => {
        e.preventDefault();

        auth.signInWithPopup(provider).catch((error) => alert(error.message));

    }

    return (
        <LoginContainer>
            <Inner>
                <img src="https://logos-world.net/wp-content/uploads/2020/10/Slack-Logo.png" alt="" />
                <h4>Built Using React, Redux, Firebase</h4>
                <Button onClick={signIn}>Sign in With Google</Button>
            </Inner>
        </LoginContainer>
    )
}

export default Login
