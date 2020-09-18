import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Login from "./pages/Login";
import Events from "./pages/Events"; 
import MyEvents from "./pages/MyEvents";



function App() {
  return (
    <Router>
      <div className="App">
      <Route exact path="/" component={Login} />
      <Route exact path="/events" component={Events} />
      </div>

    </Router>
  );
}

export default App;