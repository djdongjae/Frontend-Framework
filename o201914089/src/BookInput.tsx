// BookInput.tsx
import React, { ChangeEvent, useState } from 'react';
import type { AddBookFunc } from './types';

type Props = {
  addBook: AddBookFunc;
};

function BookInput({ addBook }: Props) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const onTitleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const onAuthorChange = (e: ChangeEvent<HTMLInputElement>) =>
    setAuthor(e.target.value);
  const onAddClick = () => {
    addBook(title, author);
    setTitle('');
    setAuthor('');
  };

  return (
    <div>
      <input type='text' value={title} onChange={onTitleChange} placeholder='제목을 입력하세요' />
      <input type='text' value={author} onChange={onAuthorChange} placeholder='저자를 입력하세요' />
      <button onClick={onAddClick}>추가</button>
    </div>
  );
}

export default BookInput;
