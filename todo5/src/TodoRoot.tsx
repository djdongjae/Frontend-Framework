import React, { useReducer, useEffect } from 'react'
import styled from 'styled-components';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { reducer, initialState } from './todoReducer';
import { reloadTodos } from './todoService';

const Div = styled.div`
  border: 1px solid gray; width: 400px; margin: 10px auto;
  box-shadow: 5px 5px 5px #DDD; padding: 30px;

  & h1 { margin: 0  0 20px 0; }
  & div > input { padding: 6px; width: 280px; }
  & button { padding: 3px 10px; }
  & table { border-collapse: collapse; margin: 20px 0; width: 100%; }
  & td { border: 1px solid gray; padding: 6px; }
  & thead { background-color: #eee; text-align: center; }
  & td:nth-child(1) { text-align: center; width: 30px; }
  & input { margin-right: 5px; }
  & input[type=checkbox] { margin-right: 10px; accent-color: gray; }
  & span { float: right; font-weight: bold; cursor: pointer; }
  & tr.done { color: #bbb; text-decoration: line-through; }
`;

const TodoRoot = React.memo(() => {
  console.log('TodoRoot');
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => { reloadTodos(dispatch); }, []);
  return (
    <Div>
      <h1>할일</h1>
      <TodoInput dispatch={dispatch} />
      <TodoList todos={state.todos} dispatch={dispatch} />
      <button onClick={() => reloadTodos(dispatch)}>새로고침</button>
    </Div>
  )
})

export default TodoRoot;

