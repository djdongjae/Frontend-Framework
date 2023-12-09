import React from 'react'
import type {Todo, DispatchFunc} from './todoReducer'
import {updateTodo, deleteTodo} from './todoService'

type Props = {
    todo: Todo,
    dispatch: DispatchFunc
}

function TodoItem({ todo, dispatch}: Props) {
    const onChange = () => updateTodo({...todo, done: !todo.done}, dispatch);
    const onClick = () => {
        if (window.confirm('삭제하시겠습니까?'))
            deleteTodo(todo.id, dispatch);
    }
    return (
        <tr className={todo.done ? "done" : ""}>
            <td>{ todo.id }</td>
            <td>
                <input type="checkbox" checked={todo.done} onChange={onChange} />
                {todo.title}
                <span onClick={onClick}>x</span>
            </td>
        </tr>
    )
}

export default TodoItem;