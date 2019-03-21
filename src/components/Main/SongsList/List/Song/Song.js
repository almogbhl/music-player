import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import {choose_song} from './Song.action';

class Song extends Component {
  playSong = () => {
    const song = this.props.data;
    this.props.do_choose_song(song)
  }

  render() {
    const title = this.props.data.title;
    return (
      <Box onClick={this.playSong}>
        <Title>{title}</Title>
      </Box>
    );
  }
}



function mapDispatchToProps(dispatch) {
  return {
    do_choose_song: (song) => dispatch(choose_song(song))
  };
}
export default connect(
  null,
  mapDispatchToProps
)(Song);

const Box = styled.div`
  width: 100%;
  height: 3rem;
  border: 1px solid black;
  background-color: #EFEFEF;
  margin-top: 0.5rem;
  cursor: pointer;
`;

const Title = styled.p`
  padding: 0.5rem;
  font-size: 1.5rem;
`;
