import React, { Component } from "react";
import styled from "styled-components";
import Song from "./Song/Song";

class List extends Component {
  render() {
    if (this.props.data.length === 0) {
      return (
        <ErrBox>
          <ErrMsg>Sorry.. No matches found.</ErrMsg>
        </ErrBox>
      );
    } else {
      return (
        <MainBox>
          <Ul>
            {this.props.data.map((item, i) => (
              <Li key={i}>
                <Song index={i} data={item} />
              </Li>
            ))}
          </Ul>
        </MainBox>
      );
    }
  }
}

export default List;

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const Ul = styled.ul``;

const Li = styled.li`
  list-style: none;
`;

const ErrBox = styled.div`
  margin-top: 1rem;
`;
const ErrMsg = styled.span`
  font-size: 2rem;
  color: red;
  text-align: center;
`;
