import React, { Component } from 'react';

const Book = ({ books }) => {
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
          </div>
        ) : null;
      })}
    </div>
  );
};

export default Book;
