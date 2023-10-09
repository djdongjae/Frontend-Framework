import React, {useState} from "react";
import "./App.css"

type Person = {
  name : string,
  age : number,
  height : number
}

function App() {
  const [person, setPerson] = useState<Person>({name: "홍길동", age : 16, height : 180});
  const increase = (key : string) => {
    if (key === "height") person.height++;
    else if (key === "age") person.age++;
    setPerson({...person});
  };
  return (
    <div className="box">
      <h1>App</h1>
      <p>{person.age}, {person.height}</p>
      <button onClick={() => increase("age")}>age++</button>
      <button onClick={() => increase("height")}>height++</button>
    </div>
  )
}

export default App;