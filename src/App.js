import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import styled from 'styled-components'
import Welcome from './components/Welcome'
const Body = styled.div`
text-align: center;
`

class App extends Component {
  render() {
    return (
      <Body>
        <Header />
          <Welcome/>
      </Body>
    );
  }
}

export default App;
