import React, { Component } from 'react';

class New extends Component {
    render() {
        return (
            <div>
                <h1>fuck yeah</h1>
                <button onClick={this.props.togglePages}>Go back!</button>
            </div>
        );
    }
}

export default New;