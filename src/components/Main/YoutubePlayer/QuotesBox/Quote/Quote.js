import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { playQuote } from './Quote.action';

class Quote extends Component {

  playQuote = () => {
    const offset = this.props.data.offset;
    this.props.do_playQuote(offset);
  }

  render() {
    const {text, offset} = this.props.data;
    const index = this.props.index + 1;

    return (
      <Box>
        <IconBox onClick={this.playQuote}>
          <FontAwesomeIcon icon="play" size="3x" color="#6AA84F"/>
        </IconBox>
        <Lyrics>Quote #{index} - "{text}"</Lyrics>
        <Time>{offset}</Time>
      </Box>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    do_playQuote: (timing) => dispatch(playQuote(timing))
  };
}
export default connect(
  null,
  mapDispatchToProps
)(Quote);

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #cfe2f3;
  height: 4rem;
  margin-bottom: 1rem;
  padding: 0 1rem;
`;

const Lyrics = styled.p`
  font-size: 1.5rem;
`;

const Time = styled(Lyrics)``;


const IconBox = styled.div `
cursor: pointer;

`