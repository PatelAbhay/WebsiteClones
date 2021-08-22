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


const Body = styled.div`
  display:flex;
  height: 100vh;
  
`;

function App() {
  return (
    <div className="app">
      <Router>
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
              </Route>
            </Switch>
          </Body>
        </>
      </Router>
    </div>
  );
}

export default App;
