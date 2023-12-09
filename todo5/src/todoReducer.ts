export type Todo = {
    id: number,
    title: string, 
    done: boolean
}

export type State = {
    todos: Todo[]
}

export const initialState: State = { todos: [] }

export type Action =
    {type: "setTodos", payload: {todos: Todo[]}} |
    {type: "addTodo", payload: {todo: Todo}} |
    {type: "updateTodo", payload: {todo: Todo}} |
    {type: "deleteTodo", payload: {id: number}}

export type DispatchFunc = (action: Action) => void;
export type ReducerFunc = (state: State, action: Action) => State;

export const reducer : ReducerFunc = (state: State, action: Action) => {
    let newTodos: Todo[];
    switch (action.type) {
        case "setTodos":
            newTodos = action.payload.todos;
            break
        case "addTodo":
            newTodos = [...state.todos, action.payload.todo];
            break;
        case "updateTodo":
            newTodos = state.todos.map(
                todo => todo.id === action.payload.todo.id ? action.payload.todo : todo
            );
            break;
        case "deleteTodo":
            newTodos = state.todos.filter(todo => todo.id !== action.payload.id);
            break;
        default:
            throw new Error("unknown action type");
    }
    return { todos: newTodos };
}