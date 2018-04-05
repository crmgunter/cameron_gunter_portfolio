import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Welcome from "./Welcome";

const LandingImage = styled.div`
  background: url("https://images.unsplash.com/photo-1502441867382-f681599c78ad?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0f125087a5cd57c1c1bfcb764f71c115&auto=format&fit=crop&w=800&q=60");
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

class FifthPage extends Component {
  state = {
    fullPage: true
  };

  goBackToHomePage = () => {
    this.setState({ fullPage: !this.state.fullPage });
  };

  render() {
    return (
      <div>
        {this.state.fullPage ? (
          <LandingImage>
            <LandingText>
              <h1>You did it!</h1>
              <button onClick={this.goBackToHomePage}>Start over</button>
            </LandingText>
          </LandingImage>
        ) : (
          <Welcome />
        )}
      </div>
    );
  }
}

export default FifthPage;
