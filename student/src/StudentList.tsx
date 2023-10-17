import React from "react";
import type * as types from "./types";
import StudentItem from "./StudentItem";

type Props = {
    studentList: types.Student[],
    deleteStudent: types.DeleteStudentFunc
}

function StudentList({studentList, deleteStudent}: Props) {
    const trList = studentList.map(student => <StudentItem student={student} key={student.id} deleteStudent={deleteStudent}/>);
    return (
        <table>
            <thead>
                <tr>
                    <td>id</td>
                    <td>이름</td>
                    <td>나이</td>
                    <td>성별</td>
                    <td>학과id</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                {trList}
            </tbody>
        </table>
    )
}

export default StudentList