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

  return (
    <div className="App">
      <header className="App-header">
        <img src="http://pngimg.com/uploads/birds/birds_PNG108.png" className="App-logo" alt="logo" />
        <Form addNewNote={addNewNote}/>
        <Note notes={notes}/>
      </header>
      
    </div>
  );
}

export default App;
