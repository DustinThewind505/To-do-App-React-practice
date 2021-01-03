import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';

import ToDoInput from './components/inputToDo';
import ToDoContainer from './components/containerToDo';
import {initialState, reducer} from './reducer/reducer';

function App() {
  const [toDoState, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>TO-DO App ✅</h1>
        <ToDoInput dispatch={dispatch} />
      </header>
      <ToDoContainer toDoState={toDoState} dispatch={dispatch} />
      <button onClick={() =>  dispatch({ type: 'CLEAR_COMPLETE'})} >Clear</button>
    </div>
  );
}

export default App;
