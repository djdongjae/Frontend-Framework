import type * as types from "./types";
import useForm from "./useForm";
import "./App.css";

type Props = {
    addStudent : types.AddStudentFunc
}

function StudentInput({addStudent}: Props) {
    const initValue = {name: "", age: NaN, gender: "", departmentId: 0};
    const [student, handler, setStudent] = useForm(initValue);
    const onClick = () => {
        addStudent(student.name, student.age, student.gender, student.departmentId);
        setStudent(initValue);
    }


    return (
        <div id="app">
            <h1>학생 등록</h1>
            <div className="control">
                <input type="text" placeholder="이름" name="name"
                    onChange={handler} value={student.name}/>
            </div>
            <div className="control">
                <input type="number" placeholder="나이" min="0" step="1" name="age"
                    onChange={handler} value={student.age}/>
            </div>
            <div className="control">
                <label>
                    <input type="radio" name="gender"
                        onChange={handler} checked={student.gender === "남자"} value="남자"/>
                    <span>남자</span>
                </label>
                <label>
                    <input type="radio" name="gender"
                        onChange={handler} checked={student.gender === "여자"} value="여자"/>
                    <span>여자</span>
                </label>
            </div>
            <select value={student.departmentId} onChange={handler} name="departmentId">
                <option value={0}>학과를 선택하세요</option>
                <option value={1}>소프</option>
                <option value={2}>컴공</option>
                <option value={3}>정통</option>
                <option value={4}>인공지능</option>
            </select>
            <button onClick={onClick}>등록</button>
        </div>
    )
}

export default StudentInput;