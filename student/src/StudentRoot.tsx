import React from "react";
import "./StudentRoot.css";
import type * as types from "./types";
import StudentInput from "./StudentInput";
import StudentList from "./StudentList";

type Props = {
    studentList: types.Student[],
    addStudent: types.AddStudentFunc,
    deleteStudent: types.DeleteStudentFunc
}

function StudentRoot({studentList, addStudent, deleteStudent}: Props) {
    return (
        <div className="studentRoot">
            <StudentInput addStudent={addStudent}></StudentInput>
            <StudentList studentList={studentList} deleteStudent={deleteStudent}></StudentList>
        </div>
    )
}

export default StudentRoot;