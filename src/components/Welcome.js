import React, { Component } from "react";
import styled from "styled-components";
import SecondPage from './SecondPage'
const Container = styled.div``;

const LandingImage = styled.div`
  background-image: url("https://images.unsplash.com/photo-1522093537031-3ee69e6b1746?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a634781c01d2dd529412c2d1e2224ec0&auto=format&fit=crop&w=800&q=60");
  height: 100vh;
  width: 100vw;
  background-size: cover;
  display: flex;
`;

const LandingText = styled.div`
margin: auto;
background: rgba(0, 0, 0, .5);
padding: 40px;
color: white;
border-radius: 10px;
`

class Welcome extends Component {
    state = {
        fullPage: true
    }

    toggleNextPage = () => {
        this.setState({fullPage: !this.state.fullPage})
    }
  render() {
    return (
        <div>
            {this.state.fullPage? (
                <Container>
                <LandingImage>
                  <LandingText>
                    <h1>Hello World.</h1>
                    {/* <button onClick={this.props.togglePages}> */}
                      {/* Click me for magic!
                    </button> */}
                    <button onClick={this.toggleNextPage}>Click me for magic!</button>
                  </LandingText>
                </LandingImage>
              </Container>
            ) : <SecondPage/>}
      
      </div>
    );
  }
}

export default Welcome;
