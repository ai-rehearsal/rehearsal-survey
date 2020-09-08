import React from 'react';
import styled ,{ keyframes }from 'styled-components';
import { ReactComponent as Logo } from '../resource/logo.svg'
import { fadeInRight } from 'react-animations';
import StartButton from './Startbutton';

const Background = styled.div`
    background: rgb(127, 71, 221);
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TextWrap = styled.div`
    color: white;
    font-size: 30pt;
    font-weight: 500;
    line-height: 36pt;
    margin-top: 200px;
    margin-bottom: 75px;
    @media (max-width: 500px) {
        font-size: 22pt;
        line-height: 32pt;
    }
`;

const FadeInUpDiv = styled.div`
  animation: 1s ${keyframes `${fadeInRight}`};
`;

class Finish extends React.Component {

    render() {
        return (
            <FadeInUpDiv>
                <Background>
                    <TextWrap>
                        당신은 <span style={{color: "rgb(251, 188, 6)", fontWeight: 900}}>삼성전자</span>의<br/>
                        <span style={{color: "rgb(251, 188, 6)", fontWeight: 900}}>경영 직무</span>가 잘 어울립니다.
                    </TextWrap>
                    <StartButton title="면접 연습하러가기>"></StartButton>
                </Background>
            </FadeInUpDiv>
        );
    }
}

export default Finish;