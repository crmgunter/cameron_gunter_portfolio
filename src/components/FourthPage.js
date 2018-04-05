import React, { Component } from "react";
import styled from "styled-components";
import FifthPage from './FifthPage'

const LandingImage = styled.div`
  background: url("https://images.unsplash.com/photo-1496025065845-4ecb4769d189?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=eef77faedecfa457981f910ac7fff438&auto=format&fit=crop&w=800&q=60");
  height: 100vh;
  width: 100vw;
  display: flex;
  background-size: cover;
`;

const LandingText = styled.div`
  background: rgba(0, 0, 0, 0.5);
  color: white;
  margin: auto;
  padding: 40px;
  border-radius: 10px;
`;

class FourthPage extends Component {
    state = {
        fullPage: true
    }

    lastPage = () => {
        this.setState({ fullPage: !this.state.fullPage })
    }

  render() {
    return (
      <div>
          {this.state.fullPage? (<LandingImage>
          <LandingText>
            <h1>We doin' it again, baby.</h1>
            <button onClick={this.lastPage}>Last page.</button>
          </LandingText>
        </LandingImage>) : <FifthPage/>}
      </div>
    );
  }
}

export default FourthPage;
