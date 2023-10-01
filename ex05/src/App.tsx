import React, {useState} from 'react';
import './App.css'

// function App() {
//   const [arr, setArr] = useState<number[]>([0, 0]);
//   const increaseAt = (index: number) => {
//     arr[index] = arr[index] + 1;
//     setArr([...arr]);
//   };
//   return (
//     <div className='box'>
//       <h1>App</h1>
//       <p>{arr.join(", ")}</p>
//       <button onClick={() => increaseAt(0)}>a[0]++</button>
//       <button onClick={() => increaseAt(1)}>a[1]++</button>
//     </div>
//   );
// }

type Person = {
  name: string,
  age: number,
  height: number
}

function App() {
  const [person, setPerson] = useState<Person>({name: '홍길동', age: 16, height: 180});
  const increase = (key: string) => {
    if (key === 'height') person.height++;
    else if (key === 'age') person.age++;
    setPerson({...person});
  };
  return (
    <div className='box'>
      <h1>App</h1>
      <p>{person.age}, {person.height}</p>
      <button onClick={() => increase('age')}>age++</button>
      <button onClick={() => increase('height')}>height++</button>
    </div>
  );
}

export default App;