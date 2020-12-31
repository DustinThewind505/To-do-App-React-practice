import logo from './logo.svg';
import './App.css';

import ToDoInput from './components/inputToDo';
import ToDoContainer from './components/containerToDo';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>TO-DO App</h1>
        <ToDoInput />
      </header>
      <ToDoContainer />
    </div>
  );
}

export default App;
