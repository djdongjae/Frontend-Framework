import React from "react";
import type * as types from "./type";
import TodoItem from "./TodoItem";

type Props = {
    todoList : types.Todo[]
    toggleTodo: types.ToggleTodo
}

function TodoList({todoList, toggleTodo}: Props) {
    const trlist = todoList.map(todo => <TodoItem todo = {todo} key={todo.id} toggleTodo={toggleTodo}/>);
    return (
        <table>
            <thead>
                <tr>
                    <td>id</td>
                    <td>할일</td>
                    <td>완료</td>
                </tr>
            </thead>
            <tbody>
                {trlist}
            </tbody>
        </table>
    )
}

export default TodoList