import React, { Component } from "react";
import New from "./New";
import Welcome from './Welcome'

class BigPage extends Component {
  state = {
    welcomePage: true
  };

  togglePages = () => {
    this.setState({
      welcomePage: !this.state.welcomePage
    });
  };

  render() {
    return (
      <div>
        {/* {this.state.welcomePage? () :null} */}

        {this.state.welcomePage ? (<Welcome togglePages={this.togglePages}/>) : (
          <New togglePages={this.togglePages}/>
        )}
      </div>
    );
  }
}

export default BigPage;
