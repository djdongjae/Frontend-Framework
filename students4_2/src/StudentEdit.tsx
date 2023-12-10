import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from 'axios';
import type {Student} from './types'

const Div = styled.div`
    & > div { margin-bottom: 20px; }
    & input[type=text], input[type=email], input[type=tel] {
        padding: 8px; width: 300px; font-size: 12pt; }
    & select { padding: 8px; width: 300px; font-size: 12pt; }
    & > div > label { margin-right: 20px; font-size: 12pt; }
    & button { padding: 0.4em 1.5em; font-size: 12pt; margin-right: 5px; }
`;

const emptyStudent: Student = {id: 0, studentNo: '', name: '', email: '', phone: '', sex: '', departmentId: 0}

function StudentEdit() {
    const [student, setStudent] = useState<Student>(emptyStudent);
    const [errorMsg, setErrorMsg] = useState<string|null>(null);

    const params = useParams();
    const id: number = params.id ? parseInt(params.id) : 0;

    const onError = (error: any) => {
        const s = error instanceof Error ? error.message : error;
        setErrorMsg(String(s));
    };

    const loadStudent = async () => {
        try {
            const response = await axios.get("/students/" + id);
            setStudent(response.data);
        } catch (error) {
            onError(error);
        }
    }

    useEffect(() => {if (id) loadStudent();}, []);

    const navigate = useNavigate();

    const onSave = async () => {
        try {
            if (id > 0)
                await axios.put("/students/" + id, student);
            else
                await axios.post("/students/", student);
            navigate('/');
        } catch (error) {
            onError(error);
        }
    }

    const onDelete = async () => {
        try {
            if (window.confirm("삭제하시겠습니까?")) {
                await axios.delete("/students/" + id);
                navigate('/');
            }
        } catch (error) {
            onError(error);
        }
    }

    const onCancel = () => navigate('/');

    const onChange = (e: any) => {
        setStudent({...student, [e.target.name]: e.target.value});
    };

    return (
        <Div>
            <h1>학생 { id ? '수정': '등록' }</h1>
            <div>
                <input type="text" placeholder="학번" onChange={onChange} name="studentNo" value={student.studentNo}/>
            </div>
            <div>
                <input type="text" placeholder="이름" onChange={onChange} name="name" value={student.name}/>
            </div>
            <div>
                <input type="email" placeholder="이메일" onChange={onChange} name="email" value={student.email}/>
            </div>
            <div>
                <input type="tel" placeholder="전화번호" onChange={onChange} name="phone" value={student.phone}/>
            </div>
            <div>
                <label>
                    <input type="radio" name="sex" value="남" onChange={onChange} checked={student.sex === "남"}/>
                    <span>남자</span>
                </label>
                <label>
                    <input type="radio" name="sex" value="여" onChange={onChange} checked={student.sex === "여"}/>
                    <span>여자</span>
                </label>
            </div>
            <div>
                <select name="departmentId" value={student.departmentId} onChange={onChange}>
                    <option value={0}>학과를 선택하세요</option>
                    <option value={1}>소프</option>
                    <option value={2}>컴공</option>
                    <option value={3}>정통</option>
                    <option value={4}>인공지능</option>
                </select>
            </div>
            <div>
                <button type="button" onClick={onSave}>저장</button>
                { (id >  0) && <button type="button" onClick={onDelete}>삭제</button> }
                <button type="button" onClick={onCancel}>취소</button>
            </div>
            {errorMsg && <div className="error">{errorMsg}</div>}
        </Div>
    )
}

export default StudentEdit