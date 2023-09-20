import React, {useState} from 'react';
import './App.css';

// import type {Person} from './PersonTable';
// import PersonTable from './PersonTable';

function App() {
  // let person1 : Person[] = [
  //   {id: 31, name: '홍길동', age: 16},
  //   {id: 32, name: '임꺽정', age: 19},
  //   {id: 33, name: '전우치', age: 20}
  // ];

  // let person2 = person1.slice(0);
  // person2.reverse();
  // return (
  //   <div>
  //     <PersonTable persons={person1}/>
  //     <hr />
  //     <PersonTable persons={person2}/>
  //   </div>
  // );

  // const onClickHandler = () => alert('버튼 1 클릭');
  // return (
  //   <div>
  //     <button onClick={onClickHandler}>버튼 1</button>
  //     <button onClick={() => alert('버튼 2 클릭')}>버튼 2</button>
  //   </div>
  // );

  // const [count, setCount] = useState(0);
  // const increase = () => {setCount(count + 1);};
  // const decrease = () => {setCount(count - 1);};
  // return (
  //   <div>
  //     <p>{count}</p>
  //     <button onClick={increase}>증가</button>
  //     <button onClick={decrease}>감소</button>
  //   </div>
  // );

  // -------------- 4) input 구현 ------------------

  // const [message, setMessage] = useState('hello');
  // return (
  //   <div>
  //     <p>{message}</p>
  //     <input type="text" onChange={(e) => setMessage(e.target.value)} value={message}/>
  //   </div>
  // );

  // -------------- 5) checkbox 구현 ------------------

  // const [value, setValue] = useState(true);
  // const helloTag = <div id="hello">Hello React.js</div>;
  //   return (
  //     <div id="app">
  //       <p>{value ? "true" : "false"}</p>
  //       <hr />
  //       <input type="checkbox" checked={value} onChange={(e) => setValue(e.target.checked)}/>
  //       {value ? helloTag : null}
  //     </div>
  //   );

  // -------------- 6) select 구현 ------------------

  // const [color, setColor] = useState('green');
  // return (
  //   <div id="app" className={color}>
  //     <h1>select</h1>
  //     <select onChange={(e) => setColor(e.target.value)} value={color}>
  //       <option>yellow</option>
  //       <option>green</option>
  //       <option>blue</option>
  //       <option>red</option>
  //     </select>
  //   </div>
  // );

  // const [gender, setGender] = useState('여자');
  // return (
  //   <div id="app">
  //     <p>{gender}</p>
  //     <hr />
  //     <label>
  //       <input type="radio" name="gender" onChange={(e) => setGender('남자')} checked={gender === '남자'}/>
  //       <span>남자</span>
  //     </label>
  //     <label>
  //       <input type="radio" name="gender" onChange={(e) => setGender('여자')} checked={gender === '여자'}/>
  //       <span>여자</span>
  //     </label>
  //   </div>
  // );

  const [schoolId, setSchoolId] = useState('');
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  return (
    <div>
      <p>이름 : {name}</p>
      <p>학번 : {schoolId}</p>
      <p>학과 : {department}</p>
      <label>
        <span>이름</span>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
      </label>
      <br />
      <label>
        <span>학번</span>
        <input type="number" onChange={(e) => setSchoolId(e.target.value)} value={schoolId}/>
      </label>
      <br />
      <select onChange={(e) => setDepartment(e.target.value)} value={department}>
       <option>소프트웨어공학전공</option>
       <option>컴퓨터공학전공</option>
       <option>인공지능전공</option>
       <option>정보통신공학전공</option>
     </select>
    </div>
  );

}

export default App;
