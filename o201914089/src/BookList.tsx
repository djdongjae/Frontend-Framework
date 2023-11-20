// BookList.tsx
import React from 'react';
import type { Book } from './types';
import BookItem from './BookItem';

type Props = {
  books: Book[];
  removeBook: (id: number) => void;
};

function BookList({ books, removeBook }: Props) {
  const bookItems = books.map((book) => (
    <BookItem book={book} key={book.id} removeBook={removeBook} />
  ));

  return (
    <table>
      <thead>
        <tr>
          <td>id</td>
          <td>제목</td>
          <td>저자</td>
        </tr>
      </thead>
      <tbody>{bookItems}</tbody>
    </table>
  );
}

export default BookList;
