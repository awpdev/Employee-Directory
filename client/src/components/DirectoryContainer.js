import React, { Component } from "react";
import ResultList from "./ResultList";
import API from "../utils/API";

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

class DirectoryContainer extends Component {
  state = {
    sortAscend: true,
    first: "",
    last: "",
    apiList: [],
    display: []
  };

  // When this component mounts, search 50 randos
  componentDidMount() {
    this.search(50);
  }

  //Search API then update state
  search = query => {
    API.search(query)
      .then(res => {
        this.setState(
          { display: [...res.data.results], apiList: [...res.data.results] }
        );
      })
      .catch(err => console.log(err));
  };

  // Based on input, update UI
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value});
    this.setState(
      { display: this.state.apiList.filter(
        person => person.name[name].toLowerCase().includes(value.toLowerCase())) }
    );
  };

  // Toggle list from ASC to DEC
  toggleSort = () => {
    let newSortArr;
    let newSort = !this.state.sortAsc;
    if (newSort) {
      newSortArr = this.state.display.sort((a, b) => (a.name.last > b.name.last) ? 1 : -1);
    } else {
      newSortArr = this.state.display.sort((b, a) => (a.name.last > b.name.last) ? 1 : -1);

    }
    this.setState({
      display: newSortArr,
      sortAscend: newSort
    })
  }

  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container>
            <form className="form">
              <input
                value={this.state.first}
                name="first"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Filter First Name"
              />
              <input
                value={this.state.last}
                name="last"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Filter Last Name"
              />
            </form>
            <Button variant="primary" onClick={(this.toggleSort)}>Toggle Sort Last Name</Button>
          </Container>
        </Jumbotron>
        <ResultList display={this.state.display} />
      </div>
    );
  }
}

export default DirectoryContainer;