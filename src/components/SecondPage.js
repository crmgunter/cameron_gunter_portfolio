import React, { Component } from "react";
import styled from "styled-components";
import ThirdPage from "./ThirdPage";

const PrettyGirl = styled.div`
  background-image: url("https://images.unsplash.com/photo-1501021646207-ea9a55e30bea?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2c389ab135c76116868c589d42d7abe4&auto=format&fit=crop&w=800&q=60");
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
`;

const PrettyGirlText = styled.div`
  margin: auto;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 40px;
  border-radius: 10px;
`;

class SecondPage extends Component {
  state = {
    fullPage: true
  };

  pageThree = () => {
    this.setState({ fullPage: !this.state.fullPage });
  };

  render() {
    return (
      <div>
        {this.state.fullPage ? (
          <PrettyGirl>
            <PrettyGirlText>
              <div>
                <h1>fuck yeah</h1>
                <button onClick={this.pageThree}>Continue!</button>
              </div>
            </PrettyGirlText>
          </PrettyGirl>
        ) : (
          <ThirdPage />
        )}

      </div>
    );
  }
}

export default SecondPage;
