import React from "react";
import './App.css';
import MyTable from "./MyTable";

function App() {
  // let persons = [
  //   {name: '홍길동', age: 16},
  //   {name: '임꺽정', age: 19},
  //   {name: '전우치', age: 20}
  // ];

  // let trlist = persons.map(person => 
  // <tr>
  //   <td>{person.name}</td>
  //   <td>{person.age}</td>
  // </tr>
  //   );

  // return (
  // <table>
  //   <tr>
  //     <td>이름</td>
  //     <td>나이</td>
  //   </tr>
  //   {trlist}
  // </table>
  // );

  // return (
  //   <div>
  //     <p className="blue">hello world</p>
  //     <p className="green">안녕하세요</p>
  //   </div>
  // )

  // let s1 = {color: "blue", fontSize: "20pt"};
  // let s2 = {color: "green", fontSize: "25pt"};

  // return (
  // <div>
  //   <p style={s1}>hello world</p>
  //   <p style={s2}>안녕하세요</p>
  // </div>
  // );

  // return (
  //   <div>
  //     <MyTable />
  //     <hr />
  //     <MyTable />
  //   </div>
  // );

  let numbers = [{num: 1}, {num: 2}, {num: 3}, {num: 4}, {num: 5}, {num: 6}, {num: 7}, {num: 8}, {num: 9}];
  let trlist = [];

  for (let numberA of numbers) {
    for (let numberB of numbers) {
      let tr = <tr>
        <td>{numberA.num}</td>
        <td>{numberB.num}</td>
        <td>{numberA.num * numberB.num}</td>
      </tr>

      trlist.push(tr);
    }
  }

  return (
    <table>
      <tr>
        <td>numA</td>
        <td>numB</td>
        <td>result</td>
      </tr>
      {trlist}
    </table>
  );

}

export default App;