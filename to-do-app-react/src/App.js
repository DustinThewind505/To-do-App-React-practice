import React, { useState } from 'react';

import Form from './components/Form';
import Note from './components/Note';

import './App.css';

const App = () => {
  const [notes, setNotes] = useState([{
    id: 1,
    title: 'Title',
    body: 'Body of a body of a body of a body of a body of a body of a body',
    complete: false
  }])

  const addNewNote = note => {
    setNotes([
      ...notes, 
      {
        id: Date.now(),
        title: note.title,
        body: note.body,
        complete: false
      }
    ])
  }

  const handleClear = () => {
   setNotes(notes.filter(element => element.complete === false))
  }

  const toggleComplete = clickedId => {
    setNotes(notes.map(element => {
      if(element.id === clickedId) {
        return {...element, complete: !element.complete}
      } else {
        return element
      }
    }))
  }

  return (
    <div className="App">
      <div className="App-header">
        <h1>Ello Poppet</h1>
        <Form addNewNote={addNewNote}/>
        <Note notes={notes} toggleComplete={toggleComplete} />
        <button type="submit" onClick={handleClear}>Clear</button>
      </div>
    </div>
  )
}

export default App;