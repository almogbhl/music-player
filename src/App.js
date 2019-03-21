import React, { Component } from "react";
import styled from 'styled-components';
import GlobalStyle from "./styles/global.styles";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import TopBar from './components/TopBar/TopBar';
import Main from './components/Main/Main';

library.add(faPlay);

class App extends Component {
  render() {
    return (
      <Wrapper>
        <GlobalStyle />

        <TopBar />
        <Main />
      </Wrapper>
    );
  }
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;
