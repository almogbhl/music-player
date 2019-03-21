import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Player from "./Player/Player";
import QuotesBox from "./QuotesBox/QuotesBox";

class YoutubePlayer extends Component {
  render() {
    const { title, youtubeId, quotes } = this.props.song;
    const offset = this.props.timing;

    return (
      <Wrapper>
        <Container>
          <Title>{title}</Title>
          <Player offset={offset} data={youtubeId} />
          <QuotesBox data={quotes} />
        </Container>
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    song: state.main.choosen_song,
    timing: state.main.timing
  };
}

export default connect(mapStateToProps)(YoutubePlayer);

const Wrapper = styled.div`
  padding: 1rem;
  flex-basis: 70%;
`;

const Container = styled.div`
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  margin-top: 0.3rem;
  margin-bottom: 2rem;
  font-size: 2.5rem;
`;
