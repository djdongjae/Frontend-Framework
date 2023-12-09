import React, { useState, useEffect } from 'react'
import axios from 'axios';
import type { Todo } from './types'
import TodoRoot from './TodoRoot';

axios.defaults.baseURL = "http://localhost:3000";

function TodoContainer() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  async function reloadTodos() {
    try {
      const response = await axios.get("/todos");
      const todos: Todo[] = response.data;
      setTodoList(todos);
    } catch (error) {
      if (error instanceof Error) alert('조회 에러: ' + error.message);
      else alert('조회 에러: ' + error);
    }
  }

  useEffect(() => {
    reloadTodos();
  }, []);

  async function addTodo(title: string) {
    try {
      const todo = {title: title, done: false};
      await axios.post("/todos/", todo);
      reloadTodos();
    } catch (error) {
      if (error instanceof Error) alert('저장 에러: ' + error.message);
      else alert('저장 에러: ' + error);
    }
  }

  async function toogleTodo(todo: Todo) {
    try {
      await axios.put("/todos/" + todo.id, { ...todo, done: !todo.done });
      reloadTodos();
    } catch (error) {
      if (error instanceof Error) alert('저장 에러: ' + error.message);
      else alert('저장 에러: ' + error);
    }
  }

  async function deleteTodo(id: number) {
    try {
      await axios.delete("/todos/" + id);
      reloadTodos();
    } catch (error) {
      if (error instanceof Error) alert('삭제 에러: ' + error.message);
      else alert('삭제 에러: ' + error);
    }
  }

  return <TodoRoot todoList={todoList}
                   addTodo={addTodo}
                   toggleTodo={toogleTodo}
                   deleteTodo={deleteTodo} />;
}

export default TodoContainer

