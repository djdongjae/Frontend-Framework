import React from "react";
import './TodoRoot.css';
import type * as types from "./type";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

type Props = {
    todoList: types.Todo[],
    addTodo: types.AddTodoFunc,
    toggleTodo: types.ToggleTodo
}

function TodoRoot({todoList, addTodo, toggleTodo}: Props) {
    return (
        <div className="todoRoot">
            <h1>할일</h1>
            <TodoInput addTodo={addTodo}/>
            <TodoList todoList={todoList} toggleTodo={toggleTodo}/>
        </div>
    )
}

export default TodoRoot