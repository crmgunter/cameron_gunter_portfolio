import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BigPage from './components/BigPage'
import Header from './components/Header'
import styled from 'styled-components'

const Body = styled.div`
text-align: center;
`

class App extends Component {
  render() {
    return (
      <Body>
        <Header />
          <BigPage/>
      </Body>
    );
  }
}

export default App;
