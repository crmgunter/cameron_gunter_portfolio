import React, { Component } from 'react';
import styled from 'styled-components'

const HeaderStyle = styled.div`
height: 15vh;
width: 100vw;
background: #151515;
`

class Header extends Component {
    render() {
        return (
            <div>
                <HeaderStyle></HeaderStyle>
            </div>
        );
    }
}

export default Header;