import React, { Component } from 'react';
import './App.css';
import Book from './Book';

class App extends Component {
  state = {
    books: [
      {
        name: 'Java',
        author: 'Mark de',
        publish: 'Head First',
        year: 2008,
        id: 1
      },
      {
        name: 'Angular',
        author: 'Peter Adam',
        publish: 'Packt',
        year: 2011,
        id: 2
      },
      { name: 'React', author: 'Alex de', publish: 'Packt', year: 2012, id: 3 }
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>techragesh.com</h1>
        <Book books={this.state.books} />
      </div>
    );
  }
}

export default App;
