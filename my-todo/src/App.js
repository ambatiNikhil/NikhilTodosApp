import logo from './logo.svg';
import './App.css';
import './Todocomponents/todos.css'
import TodoManager from './Todocomponents/todo';
import MyClassComponent from './Todocomponents/MyClassComponent';
import MyFunctionalComponent from './Todocomponents/MyFunctionalComponent';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoManager/>
      </header>
    </div>
  )
}

export default App;
