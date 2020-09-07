import React from 'react';
import styled ,{ keyframes }from 'styled-components';
import { ReactComponent as Logo } from '../resource/logo.svg'
import { fadeInRight } from 'react-animations';

const Background = styled.div`
    background: rgb(127, 71, 221);
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TextWrap = styled.div`
    color: white;
    font-size: 24pt;
    font-weight: 500;
    line-height: 36pt;
    margin-bottom: 75px;
    @media (max-width: 500px) {
        font-size: 22pt;
        line-height: 32pt;
    }
`;

const FadeInUpDiv = styled.div`
  animation: 1s ${keyframes `${fadeInRight}`};
`;

class Start extends React.Component {

    render() {
        return (
            <FadeInUpDiv>
                <Background>
                        <TextWrap>
                            당신에게 맞는<br/>
                            <span style={{color: "rgb(251, 188, 6)", fontWeight: 900}}>직무를 추천</span>해 드립니다.
                        </TextWrap>
                </Background>
            </FadeInUpDiv>
        );
    }
}

export default Start;