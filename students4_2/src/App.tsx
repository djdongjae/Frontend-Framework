import StudentRoot from './StudentRoot';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3000";

function App() {
  return (
    <div>
      <StudentRoot></StudentRoot>
    </div>
  )
}

export default App