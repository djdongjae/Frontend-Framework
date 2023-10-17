import React, {useState} from "react";
import type * as types from "./types";
import StudentRoot from "./StudentRoot";

const data : types.Student[] = [
    {id: 1, name: "오동재", age: 25, gender: "남자", departmentId: 1},
    {id: 2, name: "기하은", age: 25, gender: "여자", departmentId: 3},
    {id: 3, name: "성병현", age: 24, gender: "남자", departmentId: 2},
    {id: 4, name: "이예준", age: 30, gender: "남자", departmentId: 4}
];

function StudentContainer() {
    const [studentList, setStudentList] = useState<types.Student[]>(data);

    const addStudent : types.AddStudentFunc = (name: string, age: number, gender: string, departmentId: number) => {
        const lastIndex = studentList.length - 1;
        const lastId = studentList[lastIndex].id;
        const student = {id: lastId + 1, name: name, age: age, gender: gender, departmentId: departmentId};
        setStudentList([...studentList, student]);
    }

    const deleteStudent : types.DeleteStudentFunc = (id: number) => {
        setStudentList(studentList.filter(student => student.id !== id));
    }

    return <StudentRoot studentList={studentList} addStudent={addStudent} deleteStudent={deleteStudent}></StudentRoot>;
    
}

export default StudentContainer;