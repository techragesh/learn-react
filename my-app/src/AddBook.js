import React, { Component } from 'react';

class AddBook extends Component {
  state = {
    name: null,
    author: null,
    publish: null,
    year: null
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    //console.log(this.state);
    this.props.addBook(this.state);
    this.setState({
      name: null,
      author: null,
      publish: null,
      year: null
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlform="Name">Name:</label>
          <input type="text" id="name" onChange={this.handleChange} />
          <label htmlform="Author">Author:</label>
          <input type="text" id="author" onChange={this.handleChange} />
          <label htmlform="Publish">Publish:</label>
          <input type="text" id="publish" onChange={this.handleChange} />
          <label htmlform="Year">Year:</label>
          <input type="text" id="year" onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddBook;
