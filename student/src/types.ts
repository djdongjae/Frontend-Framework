export type Student = {
    id: number,
    name: string,
    age: number,
    gender: string,
    departmentId: number
}

export type AddStudentFunc = (name: string, age: number, gender: string, departmentId: number) => void;
export type DeleteTodoFunc = (id: number) => void;