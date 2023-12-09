import React from "react"
import type * as types from "./types"
import TodoItem from "./TodoItem"

type Props = {
    todoList: types.Todo[],
    toggleTodo: types.ToogleTodoFunc,
    deleteTodo: types.DeleteTodoFunc
}

function TodoList({todoList, toggleTodo, deleteTodo}: Props) {
    const trlist = todoList.map(todo => <TodoItem todo={todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}></TodoItem>);
    return (
        <table>
            <thead>
                <tr>
                    <td>id</td>
                    <td>할일</td>
                </tr>
            </thead>
            <tbody>
                {trlist}
            </tbody>
        </table>
    )
}

export default TodoList