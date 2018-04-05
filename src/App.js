import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import styled from "styled-components";
import Welcome from "./components/Welcome";
import About from './components/About'
const Body = styled.div`
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <Body>
          <Header />
          <Route exact path="/" component={Welcome} />
          <Route path="/about" component={About}/>
        </Body>
      </Router>
    );
  }
}

export default App;
