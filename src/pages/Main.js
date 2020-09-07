import React from 'react';
import styled from 'styled-components';
import Loading from '../components/loading';

class Main extends React.Component {
  
  render() {
    return (
      <div style={{ width: '100%', height: '100%'}}>
        <Loading></Loading>
      </div>
    );
  }
}

export default Main;