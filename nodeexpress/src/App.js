import React, { Component } from "react";

import { Route, Link } from "react-router-dom";

import axios from "axios"
import CssBaseline from '@material-ui/core/CssBaseline';

import "./App.css";
import ProjectList from "./components/ProjectList";
import Project from "./components/Project";

class App extends Component {
  render() {
    return <div className="App">
      I'm the App
      <Route exact path='/' component={ProjectList} />
      <Route path='/projects/:id' render={props => <Project {...props} />} />
    </div>;
  }
}

export default App;
