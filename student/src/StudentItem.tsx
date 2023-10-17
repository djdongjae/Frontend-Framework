import React from "react";
import type * as types from "./types";

type Props = {
    student: types.Student
}

function StudentItem({student}: Props) {
    return (
        <tr>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.gender}</td>
            <td>{student.departmentId}</td>
        </tr>
    )
}

export default StudentItem;