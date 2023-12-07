import { useEffect } from "react";
import { test1, test2, test3} from './test_axios2';

function App() {
  useEffect(() => {
    test1();
    test2();
    test3(1);
    test3(400);
  });

  return (
    <h1>axios 테스트</h1>
  )
}

export default App;