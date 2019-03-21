import React, { Component } from "react";
import styled from "styled-components";

class SearchBar extends Component {
  update_list(event) {
    
    const { list_data , on_filter } = this.props;
    let txt = event.target.value;

    let filtered_list = list_data.filter( item =>
        item.title.toLowerCase().includes(txt.toLowerCase()) 
    )
    on_filter(filtered_list)
}

  render() {
    return (
      <Form>
        <Input type="search" placeholder="Search..."  onChange={(e) => this.update_list(e)}/>
      </Form>
    );
  }
}

export default SearchBar;

const Form = styled.form`
  border: 1px solid black;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.7rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
`;
