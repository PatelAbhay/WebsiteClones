import React from 'react'
import "../css/Login.css" 
import { Button } from '@mui/material'
import { auth, provider } from '../firebase'
import { actionTypes } from '../reducer'
import { useStateValue } from '../StateProvider'

function Login() {
    
    const [state, dispatch] = useStateValue()

    const signIn = () => {
        //auth.signInWithPopup(provider).catch((error) => alert(error.message));
        auth.signInWithPopup(provider).then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        }).catch(error => alert(error.message))
    }
    
    return (
        <div className="login-container">
            <div className="login-logo">
                <img src="./facebook-logo.svg" alt=""/>
                <img src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png" alt=""/>
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
