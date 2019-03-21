import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Loader from "react-loader-spinner";
import {fetchSongs} from './Main.action';
import SongsList from "./SongsList/SongsList";
import YoutubePlayer from "./YoutubePlayer/YoutubePlayer";

class Main extends Component {

  componentDidMount() {
    this.props.do_fetchSongs();
  }

  render() {
    if(this.props.displayed_list === null) {
      return (
        <Loader type="Oval" color="#00BFFF" height="100" width="100" />
      )
    } else {
      return (
        <Container>
          <SongsList />
          <YoutubePlayer />
        </Container>
      );
    }
   
  }
}

function mapStateToProps(state) {
  return {
    displayed_list: state.main.displayed_list
  };
}

function mapDispatchToProps(dispatch) {
  return {
    do_fetchSongs: () => dispatch(fetchSongs())
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

const Container = styled.main`
  width: 100%;
  display: flex;
  flex-basis: 90%;
`;
