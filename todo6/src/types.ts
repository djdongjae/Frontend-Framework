export type Todo = {
    id: number,
    title: string, 
    done: boolean
};

export type AddTodoFunc = (text: string) => void;
export type ToogleTodoFunc = (todo: Todo) => void;
export type DeleteTodoFunc = (id: number) => void;