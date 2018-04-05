import React, { Component } from "react";
import styled from "styled-components";
import FourthPage from './FourthPage'

const LandingImage = styled.div`
  background: url("https://images.unsplash.com/photo-1495900158145-fa1e1786861b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d2cb8ee4de153b83ed42e3ab1943e6e5&auto=format&fit=crop&w=800&q=60");
  height: 100vh;
  width: 100vw;
  background-size: cover;
  display: flex;
`;

const LandingText = styled.div`
  background: rgba(0, 0, 0, 0.5);
  color: white;
  margin: auto;
  padding: 40px;
  border-radius: 10px;
`;

class ThirdPage extends Component {
  state = {
    fullPage: true
  };

  fourthPage = () => {
    this.setState({ fullPage: !this.state.fullPage });
  };

  render() {
    return (
      <div>
        {this.state.fullPage ? (
          <LandingImage>
            <LandingText>
              <h1>hey</h1>
              <button onClick={this.fourthPage}>Keep clicking!</button>
            </LandingText>
          </LandingImage>
        ) : (
          <FourthPage />
        )}
      </div>
    );
  }
}

export default ThirdPage;
