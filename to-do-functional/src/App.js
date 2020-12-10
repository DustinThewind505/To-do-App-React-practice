// ============ IMPORTS ============
import React, { useState } from 'react';
import './App.css';
import { v4 as uuid } from 'uuid';

import { Form } from './components/form';
import { Notes } from './components/notes';

const initialNotes = [
  {
    id: uuid(),
    title: 'Interview!',
    body: 'Scheduled for 2:00pm EST',
    complete: false
  },
  {
    id: uuid(),
    title: 'Walk the dog',
    body: 'Everyday',
    complete: false
  }
]

function App() {
  // ============ STATE ============
  const [notes, setNotes] = useState(initialNotes)


  // ============ FUNCTIONS ============
  const addNewNote = (noteTitle, noteBody) => {
    const newNote = {
      id: uuid(),
      title: noteTitle,
      body: noteBody,
      complete: false
    }

    setNotes([...notes, newNote])
  }

  const toggleComplete = itemId => {
    const newNotesList = notes.map(note => {
      if(itemId === note.id) {
        return {
          ...note,
          complete: !note.complete
        }
      } else {
        return note
      }
    })

    setNotes(newNotesList)
  }

  const clearComplete = () => {
    setNotes(notes.filter(note => note.complete === false))
  }


  // ============ COMPONENT ============
  return (
    <div className="App">
      <header className="App-header">
       <h1>Notes App</h1>
      </header>
      <Form addNewNote={addNewNote} clearComplete={clearComplete} />
      <Notes notes={notes} toggleComplete={toggleComplete} />
      <button onClick={clearComplete} >Clear Complete</button>
    </div>
  );
}

export default App;
