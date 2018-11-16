import React, { Component } from 'react';

const Book = ({ books, deleteBook }) => {
  // const bookList = books.map(book => {
  //   return (
  //     <div className="" key={book.id}>
  //       <div>Name: {book.name}</div>
  //       <div>Author: {book.author}</div>
  //       <div>Publish: {book.publish}</div>
  //     </div>
  //   );
  // });
  return (
    <div>
      {books.map(book => {
        return book.year > 2009 ? (
          <div className="" key={book.id}>
            <div>Name: {book.name}</div>
            <div>Author: {book.author}</div>
            <div>Publish: {book.publish}</div>
            <div>Year: {book.year}</div>
            <button onClick={() => deleteBook(book.id)}>Delete Book</button>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default Book;
