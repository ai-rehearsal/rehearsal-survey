import React from 'react';
import styled from 'styled-components';
import Logo from './logo.svg'

const Background = styled.div`
    background: #fff;
    width: 100%;
    height: 100vh;
    background-color: #000;
`;

class Loading extends React.Component {

    render() {
        return (
            <Background>
                
            </Background>
        );
    }
}

export default Loading;