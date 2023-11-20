// BookItem.tsx
import React from 'react';
import type { Book } from './types';

type Props = {
  book: Book;
  removeBook: (id: number) => void;
};

function BookItem({ book, removeBook }: Props) {
  // 삭제 버튼 클릭 이벤트 핸들러
  const handleRemoveClick = (id: number) => {
    // 사용자에게 삭제를 확인
    if (window.confirm('삭제하시겠습니까?')) {
      removeBook(id);
    }
  };

  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>
        {book.author}
        <span onClick={() => handleRemoveClick(book.id)}>x</span>
    </td>
    </tr>
  );
}

export default BookItem;
