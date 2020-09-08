import React from 'react';
import styled ,{ keyframes }from 'styled-components';

const Startbutton = styled.div`
    color: white;
    border-bottom: 4px solid rgb(251, 188, 6);
    font-size: 24pt;
    font-weight: 500;
    line-height: 36pt;
    margin-top: 300px;
    margin-right: 150px;
    cursor: pointer;
    user-select: none;
    @media (max-width: 500px) {
        font-size: 22pt;
        line-height: 32pt;
    }
`;

class StartButton extends React.Component {

    render() {
        return (
            <Startbutton>
                {this.props.title}
            </Startbutton>                    
        );
    }
}

export default StartButton;