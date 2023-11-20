// BookRoot.tsx
import React from 'react';
import './BookRoot.css';
import type { Book, AddBookFunc } from './types';
import BookInput from './BookInput';
import BookList from './BookList';

type Props = {
  books: Book[];
  addBook: AddBookFunc;
  removeBook: (id: number) => void;
};

function BookRoot({ books, addBook, removeBook }: Props) {
  return (
    <div className="bookRoot">
      <h1>책</h1>
      <BookInput addBook={addBook} />
      <BookList books={books} removeBook={removeBook} />
    </div>
  );
}

export default BookRoot;
