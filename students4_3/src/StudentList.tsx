import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from 'axios';
import StudentItem from "./StudentItem";
import type {Student} from './types'

const Div = styled.div`
    & > button {
        padding: 0.2em 1.5em;
        font-size: 11pt;
        margin-bottom: 5px;
        float: right;
    }

    & table {
        border-collapse: collapse;
        width: 100%;
    }

    & thead {
        background-color: #eee;
        text-align: center;
    }

    & td {
        border: 1px solid gray;
        padding: 4px;
    }

    & td:nth-child(1) {
        text-align: center;
        width: 30px
    }

    & tr:hover {
        background-color: #ffe;
        cursor: pointer;
    }
`;

function StudentList() {
    const [students, setStudents] = useState<Student[]>([]);
    const [errorMsg, setErrorMsg] = useState<string|null>(null);

    const loadStudents = async () => {
        try {
            const response = await axios.get("students");
            setStudents(response.data);
        } catch (error) {
            const s = error instanceof Error ? error.message : error;
            setErrorMsg(String(s));
        }
    };

    useEffect(() => {loadStudents();}, []);
    
    const navigate = useNavigate()
    const onCreate = () => navigate('/create');

    const trlist = students.map(student => <StudentItem key={student.id} student={student}></StudentItem>);

    return (
        <Div>
            <button type="button" onClick={onCreate}>등록</button>
            <table>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>학번</td>
                        <td>이름</td>
                        <td>이메일</td>
                        <td>전화</td>
                        <td>성별</td>
                        <td>학과</td>
                    </tr>
                </thead>
                <tbody>
                    {trlist}
                </tbody>
            </table>
            {errorMsg && <div className="error">{errorMsg}</div>}
        </Div>
    )
}

export default StudentList