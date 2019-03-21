import React, { Component } from "react";
import styled from "styled-components";
import Quote from "./Quote/Quote";

class QoutesBox extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Title>Quotes</Title>
          <NumQuotes>{this.props.data.length} Quotes</NumQuotes>
        </Header>
        <Ul>
          {this.props.data.map((item, i) => (
            <Li key={i}>
              <Quote index={i} data={item} />
            </Li>
          ))}
        </Ul>
      </Container>
    );
  }
}

export default QoutesBox;

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  margin: 1rem 0;
  justify-content: space-between;
`;

const Title = styled.h3`
  font-size: 2rem;
  color: gray;
`;

const NumQuotes = styled.span`
  font-size: 1.2rem;
`;

const Ul = styled.ul``;

const Li = styled.li`
  list-style: none;
`;
