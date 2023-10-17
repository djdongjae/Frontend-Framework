import React from "react";
import type * as types from "./types";

type Props = {
    student: types.Student,
    deleteStudent: types.DeleteStudentFunc
}

function StudentItem({student, deleteStudent}: Props) {
    const onClick = () => {
        if (window.confirm("삭제하시겠습니까?"))
            deleteStudent(student.id);
    }
    return (
        <tr>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.gender}</td>
            <td>{student.departmentId}</td>
            <td>
                <button onClick={onClick}>삭제</button>
            </td>
        </tr>
    )
}

export default StudentItem;