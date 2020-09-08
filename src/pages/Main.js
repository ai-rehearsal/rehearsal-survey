import React from 'react';
import styled, { keyframes } from 'styled-components';
import Loading from '../components/loading';
import Start from '../components/Start';
import Finish from '../components/Finish';
import { fadeInUp } from 'react-animations';


const App = styled.div`
    background: #fff;
    width: 500px;
    height: 100vh;
    margin: 0 auto;
    @media (max-width: 500px) {
      width: 100%;
    }
`;

class Main extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
        render: false //Set render state to false
    }
  }

  componentDidMount() {
    setTimeout(function() { //Start the timer
        this.setState({render: true}) //After 1 second, set render to true
    }.bind(this), 2000)
  }

  render() {
    const {
			render,
		}	= this.state ;
    return (
      <App>
          { render ? (<Start/>) : <Loading/>}
      </App>
    );
  }
}

export default Main;