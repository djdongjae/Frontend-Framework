import React, {useState} from "react";
import "./App.css";

function CounterA() {
  console.log("CounterA 호출됨");
  const [value, setValue] = useState<number>(0);
  return (
    <div className="box">
      <h1>CounterA</h1>
      <button onClick={() => setValue(value + 1)}>
        {value}
      </button>
    </div>
  )
}

function CounterB() {
  console.log("CounterB 호출됨");
  const [value, setValue] = useState<number>(0);
  return (
    <div className="box">
      <h1>CounterB</h1>
      <button onClick={() => setValue(value + 1)}>
        {value}
      </button>
    </div>
  )
}

function GroupComponent() {
  console.log("GroupComponent 호출됨");
  const [value, setValue] = useState<number>(0);
  return (
    <div className="box">
      <h1>GroupComponent</h1>
      <button onClick={() => setValue(value + 1)}>
        {value}
      </button>
      <CounterA></CounterA>
      <CounterB></CounterB>
    </div>
  )
}

function App() {
  console.log("App 호출됨");
  const [value, setValue] = useState<number>(0);
  return (
    <div className="box">
      <h1>App</h1>
      <button onClick={() => setValue(value + 1)}>
        {value}
      </button>
      <GroupComponent></GroupComponent>
    </div>
  );
}

export default App;