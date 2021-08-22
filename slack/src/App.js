import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <h1>Actual App</h1>

      <Router>
        <>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/">
              <h1>Main Home Page</h1>
            </Route>
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
