import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { filter_list } from "./SearchBar/SearchBar.action";
import SearchBar from "./SearchBar/SearchBar";
import List from "./List/List";

class SongsList extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <SearchBar
            list_data={this.props.original_list}
            on_filter={this.props.do_filter_list}
          />
          <List data={this.props.displayed_list} />
        </Container>
      </Wrapper>
    );
  }
}
function mapStateToProps(state) {
  return {
    displayed_list: state.main.displayed_list,
    original_list: state.main.original_list
  };
}
function mapDispatchToProps(dispatch) {
  return {
    do_filter_list: fl => dispatch(filter_list(fl))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongsList);

const Wrapper = styled.div`
  padding: 1rem;
  flex-basis: 30%;
`;

const Container = styled.div`
  background-color: #cfe2f3;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;
