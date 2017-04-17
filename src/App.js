import React, { Component } from 'react';
import tile from './tile.jpg';
import logo from './logo.png';
import styled from 'styled-components';

const Tile = styled.div`
  min-height: 100%;
  min-width: 100%;
  background-image: url('${tile}');
  background-repeat: no-repeat;
  background-size: contain;
`;

const Title = styled.div`
  position: absolute;
  top: 65%;
  left: 0%;
  height: 35%;
  width: 100%;
  background-color: rgba(0,0,0,0.5);
`;

const LogoWrapper = styled.div`
  float: left;
  padding: 1% 0 0 1%;
  height: 100%;
  width: 20%;
`;

const Logo = styled.div`
  height: 100%;
  width: 80%;
  display: block;
  margin: 0 auto;
  background-image: url('${logo}');
  background-repeat: no-repeat;
  background-size: contain;
`;

const Text = styled.p`
  color: #fff;
  float: right;
  width: 79%;
  height: 100%;
  opacity: 1;
  text-align: left;
  vertical-align: middle;
  font-family: verdana;
  font-size: 25px;
`;

const Wrapper = styled.section`
  position: relative;
  top: 30px;
  left: 30px;
  width: 450px;
  height: 250px;
  padding: 7px 7px 15px 10px;
  background-color: #000000;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Tile></Tile>
        <Title>
          <LogoWrapper><Logo></Logo></LogoWrapper>
          <Text>Home and Away</Text>
        </Title>
      </Wrapper>
    );
  }
}

export default App;
