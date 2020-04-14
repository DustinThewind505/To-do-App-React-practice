import React, { useState } from 'react';
import ReactDOM from "react-dom";

import Form from './components/Form';
import Note from './components/Note';
import './App.css';

function App() {

  const [notes, setNote] = useState([{
    id: 1,
    title: 'Title',
    body: 'Note',
    complete: false
  }])

  const addNewNote = note => {
    const newNote = {
      id: Date.now(),
      title: note.title,
      body: note.body,
      complete: false
    }

    setNote([...notes, newNote])
  }

  const toggleComplete = clickedId => {
    const newList = notes.map(element => {
      if(clickedId === element.id) {
        return {
          ...element,
          complete: !element.complete
        }
      } else {
        return element
      }
    })

    setNote(newList)
  }

  const clearComplete = () => {
    setNote(notes.filter(note => note.complete === false))
  }

  return (
    <div className="App">
      <header className="App-header">
        <div onClick={clearComplete}>
        <img src="http://pngimg.com/uploads/birds/birds_PNG108.png" className="App-logo" alt="logo" onClick={clearComplete}/>
        </div>
        <Form addNewNote={addNewNote}/>
        <Note notes={notes} toggleComplete={toggleComplete}/>
        <button onClick={clearComplete}>Clear</button>
      </header>
      
    </div>
  );
}

export default App;
