import useForm from "./useForm";
import "./App.css";

function App() {
  // const initValue = { name: "", age: NaN, gender: "", departmentId: 0, enabled: false };
  // const [student, handler] = useForm(initValue);
  // return (
  //   <div id="appBlock">
  //     <div id="app">
  //       <h1>입력폼</h1>
  //       <div className="control">
  //         <input type="text" placeholder="이름" onChange={handler} value={student.name} name="name" />
  //       </div>
  //       <div className="control">
  //         <input type="number" placeholder="나이" onChange={handler} value={student.age} name="age" />
  //       </div>
  //       <div className="control">
  //         <label>
  //           <input type="radio" value="남자" onChange={handler} checked={student.gender === "남자"} name="gender" />
  //           <span>남자</span>
  //         </label>
  //         <label>
  //           <input type="radio" value="여자" onChange={handler} checked={student.gender === "여자"} name="gender" />
  //           <span>여자</span>
  //         </label>
  //       </div>
  //       <select onChange={handler} value={student.departmentId} name="departmentId">
  //         <option value={0}>학과를 선택하세요</option>
  //         <option value={1}>소프</option>
  //         <option value={2}>컴공</option>
  //         <option value={3}>정통</option>
  //         <option value={4}>인공지능</option>
  //       </select>
  //       <div className="control">
  //         <label>
  //           <input type="checkbox" onChange={handler} checked={student.enabled} name="enabled"/>
  //           <span>활성화</span>
  //         </label>
  //       </div>
  //       <hr />
  //       <h1>입력된 값</h1>
  //       <div className="control">이름: {student.name}</div>
  //       <div className="control">나이: {student.age}</div>
  //       <div className="control">성별: {student.gender}</div>
  //       <div className="control">학과: {student.departmentId}</div>
  //       <div className="control">활성화: {student.enabled ? "true" : "false"}</div>
  //     </div>
  //   </div>
  // );

  const initValue = {title: "", price: NaN, category: ""};
  const [product, handler] = useForm(initValue);
  return (
    <div id="app">
      <h1>입력폼</h1>
      <div className="control">
        <input type="text" placeholder="제품명" onChange={handler} value={product.title} name="title"/>
      </div>
      <div className="control">
        <input type="number" placeholder="가격" min="0" step="100" onChange={handler} value={product.price} name="price"/>
      </div>
      <select onChange={handler} value={product.category} name="category">
        <option value="">제품 유형을 선택하세요</option>
        <option value="음료">음료</option>
        <option>과자</option>
        <option>빵</option>
      </select>
      <hr />
      <h1>입력된 값</h1>
      <div className="control">제품명: {product.title}</div>
      <div className="control">가격: {product.price}</div>
      <div className="control">제품유형: {product.category}</div>
    </div>
  );
}

export default App;