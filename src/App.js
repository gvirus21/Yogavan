import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import SignupPage from "./pages/signup";
import EnrollPage from "./pages/enroll";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signup" component={SignupPage} exact />
        <Route path="/enroll" component={EnrollPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
