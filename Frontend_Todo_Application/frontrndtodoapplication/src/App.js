import './App.css';
import TaskInput from './Components/TaskInput';
import TaskList from './Components/TaskList';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
    <TaskInput/>
    <TaskList/>
    </>
  );
}

export default App;
