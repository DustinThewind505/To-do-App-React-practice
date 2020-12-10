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
    body: 'Is scheduled for 2:00pm EST'
  },
  {
    id: uuid(),
    title: 'Walk the dog',
    body: 'Everyday'
  }
]

function App() {
  // ============ STATE ============
  const [notes, setNotes] = useState(initialNotes)


  // ============ FUNCTIONS ============



  // ============ COMPONENT ============
  return (
    <div className="App">
      <header className="App-header">
       <h1>To-Do App</h1>
      </header>
      <Form />
      <Notes notes={notes} />
    </div>
  );
}

export default App;
