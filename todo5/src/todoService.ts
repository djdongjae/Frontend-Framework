import type { Todo, DispatchFunc } from "./todoReducer";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

export async function reloadTodos(dispatch: DispatchFunc) {
    try {
        const response = await axios.get("/todos");
        const todos: Todo[] = response.data;
        dispatch({ type: 'setTodos', payload: {todos}});
    } catch (error) {
        if (error instanceof Error) alert('조회 에러: ' + error.message);
        else alert('조회 에러: ' + error);
    }
}

export async function updateTodo(todo: Todo, dispatch: DispatchFunc) {
    try {
        await axios.put("/todos/" + todo.id, todo);
        dispatch({type: 'updateTodo', payload: {todo: todo}});
    } catch (error) {
        if (error instanceof Error) alert('저장 에러: ' + error.message);
        else alert('저장 에러: ' + error);
    }
}

export async function deleteTodo(id: number, dispatch: DispatchFunc) {
    try {
        await axios.delete("/todos/" + id);
        dispatch({ type: 'deleteTodo', payload: {id} });
    } catch (error) {
        if (error instanceof Error) alert('삭제 에러: ' + error.message);
        else alert('삭제 에러: ' + error);
    }
}

export async function addTodo(todo: Todo, dispatch: DispatchFunc) {
    try {
        const response = await axios.post("/todos/", todo);
        dispatch({ type: 'addTodo', payload: {todo: response.data}});
    } catch (error) {
        if (error instanceof Error) alert('저장 에러: ' + error.message);
        else alert('저장 에러: ' + error);
    }
}