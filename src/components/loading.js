import React from 'react';
import styled ,{ keyframes }from 'styled-components';
import { ReactComponent as Logo } from '../resource/logo.svg'
import { fadeInUp } from 'react-animations';

const Background = styled.div`
    background: #fff;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LogoWrap = styled.div`
    width: 50%;
    
`;

const FadeInUpDiv = styled.div`
  animation: 1s ${keyframes `${fadeInUp}`};
`;


class Loading extends React.Component {

    render() {
        return (
                <Background>
                    <LogoWrap>
                        <FadeInUpDiv>
                            <Logo/>
                        </FadeInUpDiv>
                    </LogoWrap>
                </Background>
        );
    }
}

export default Loading;