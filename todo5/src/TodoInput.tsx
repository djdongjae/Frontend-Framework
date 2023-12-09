import React, {ChangeEvent, useState} from "react"
import type { DispatchFunc } from "./todoReducer"
import {addTodo} from './todoService'

type Props = {
    dispatch : DispatchFunc
}

function TodoInput({ dispatch }: Props) {
    const [title, setTitle] = useState<string>("");
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
    const onClick = () => {
        addTodo({id: 0, title: title, done: false}, dispatch);
        setTitle('');
    }
    return (
        <div>
            <input type="text" value={title} onChange={onChange}/>
            <button onClick={onClick}>추가</button>
        </div>
    )
}

export default TodoInput