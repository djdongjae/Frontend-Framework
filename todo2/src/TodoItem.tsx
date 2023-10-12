import React, {useState, ChangeEvent} from "react";
import type * as types from "./type";

type Props = {
    todo: types.Todo
    toggleTodo: types.ToggleTodo
}

function TodoItem({todo, toggleTodo} : Props) {

    const [done, setDone] = useState<boolean>(todo.done);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDone(e.target.checked);
        toggleTodo(todo.id);
    };

    return (
        <tr>
            <td>{todo.id}</td>
            <td>{todo.title}</td>
            <td>
                <input className="check" type="checkbox" checked={done} onChange={onChange}></input>
            </td>
        </tr>
    );
}

export default TodoItem;