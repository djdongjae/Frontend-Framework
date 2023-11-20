// BookContainer.tsx
import React, { useState } from 'react';
import type { Book, AddBookFunc } from './types';
import BookRoot from './BookRoot';

const initialBooks: Book[] = [
  { id: 1, title: '도시', author: '박경리' },
  { id: 2, title: '천왕봉', author: '토스토예프스키' }
];

function BookContainer() {
  const [books, setBooks] = useState<Book[]>(initialBooks);

  const addBook: AddBookFunc = (title: string, author: string) => {
    const newBook: Book = {
      id: books.length > 0 ? books[books.length - 1].id + 1 : 1,
      title,
      author
    };
    setBooks([...books, newBook]);
  };

  const removeBook = (id: number) => {
    setBooks(books.filter(book => book.id !== id));
  };

  return <BookRoot books={books} addBook={addBook} removeBook={removeBook} />;
}

export default BookContainer;
