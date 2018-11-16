import React, { Component } from 'react';
import './App.css';
import Book from './Book';
import AddBook from './AddBook';

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

  addBook = book => {
    console.log(book);
    book.id = Math.random();
    let bk = [...this.state.books, book];
    this.setState({
      books: bk
    });
  };

  deleteBook = id => {
    console.log('Book Id', id);
  };

  render() {
    return (
      <div className="App">
        <h1>techragesh.com</h1>
        <Book deleteBook={this.deleteBook} books={this.state.books} />
        <AddBook addBook={this.addBook} />
      </div>
    );
  }
}

export default App;
