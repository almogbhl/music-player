import React, { Component } from "react";
import styled from 'styled-components';

class TopBar extends Component {
  render() {
    return (
      <Header>
          <Title>Youtube qoutes application</Title>
      </Header>
    );
  }
}

export default TopBar;

const Header = styled.header`
  flex-basis: 10%;
`;

const Title = styled.h1 `
    text-align: center;
    font-size: 4rem;
    margin: 1rem auto;
`