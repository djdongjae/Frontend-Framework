import React from "react";
import TodoItem from "./TodoItem";
import type {Todo, DispatchFunc} from './todoReducer'

type Props = {
    todos: Todo[],
    dispatch: DispatchFunc
}

function TodoList({todos, dispatch}: Props) {
    const trlist = todos.map(todo => <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />);
    return (
        <table>
            <thead>
                <tr><td>id</td><td>할 일</td></tr>
            </thead>
            <tbody>
                {trlist}
            </tbody>
        </table>
    )
}

export default TodoList