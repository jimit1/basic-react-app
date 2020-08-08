import React from "react";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        <Switch>
          <Route exact path="/">
            <h1>Hello from Home</h1>
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/about">
            <h1>Hello from About</h1>
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/contact">
            <h1>Hello from Contact</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
