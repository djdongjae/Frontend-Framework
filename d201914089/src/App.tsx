import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [height, setHeight] = useState('');
  const [color, setColor] = useState('#bfb');
  const divStyle = {
    height: height,
    backgroundColor: color
  };
  return (
    <div id="app">
      <h1>입력폼</h1>
      <div className="control">
        <input type="text" placeholder="메시지"
               onChange={(e) => setName(e.target.value)} value={name} />
      </div>
      <div className="control">
        <input type="text" placeholder="높이"
               onChange={(e) => setHeight(e.target.value)} value={height} />
      </div>
      <select value={color}
              onChange={(e) => setColor(e.target.value)}>
        <option value={'#ffa'}>yellow</option>
        <option value={'#bfb'}>green</option>
        <option value={'#bbf'}>blue</option>
        <option value={'#fbb'}>red</option>
      </select>
      <hr />
      <h1>입력된 값</h1>
      <div className="control">메시지: {name}</div>
      <div className="control">높이: {height}</div>
      <div className="control">색: {color}</div>
      <hr />
      <h1>메시지</h1>
      <div style={divStyle}>
        {name}
      </div>
    </div>
  );
}

export default App;

