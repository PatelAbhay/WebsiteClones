import React from 'react';
import './App.css';
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import Chat from './components/Chat'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase'
import Login from './components/Login';
import Spinner from 'react-spinkit'

const Body = styled.div`
  display:flex;
  height: 100vh;
`;

const AppLoading = styled.div`
  display:grid;
  place-items: center;
  height: 100vh;
  width:100%;
`;

const Content = styled.div`
  text-align:center;
  padding-bottom: 100px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  > img {
    height: 100px;
    padding:20px;
    margin-bottom:40px;
  }
`;

function App() {

  const [user, loading] = useAuthState(auth)

  if (loading) {
    return (
      <AppLoading>
        <Content>
          <img src="https://logos-world.net/wp-content/uploads/2020/10/Slack-Logo.png" alt="" />
          <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
        </Content>
      </AppLoading>
    )
  }

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            {/* Header */}
            <Header />
            <Body>
              <SideBar />
              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/">
                  {/* Actual Chat */}
                  <Chat />
                </Route>
              </Switch>
            </Body>
          </>)}
      </Router>
    </div>
  );
}

export default App;
