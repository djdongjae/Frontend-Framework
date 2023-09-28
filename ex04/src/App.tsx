import useForm from "./useForm";
import "./App.css";

function App() {
  const initValue = {name: "", age: NaN, gender: "", departmentId: 0, enabled: false};
  const [student, handler] = useForm(initValue);
  return (
    <div id="app">
      <h1>입력폼</h1>
      <div className="control">
        <input type="text" placeholder="이름" onChange={handler} value={student.name} name="name"/>
      </div>
      <div className="control">
        <input type="number" placeholder="나이" onChange={handler} value={student.age} name="age"/>
      </div>
      <div className="control">
        <label>
          <input type="radio" value="남자" onChange={handler} checked={student.gender === "남자"} name="gender" />
          <span>남자</span>
        </label>
        <label>
          <input type="radio" value="여자" onChange={handler} checked={student.gender === "여자"} name="gender" />
          <span>여자</span>
        </label>
      </div>
    </div>
  );
}