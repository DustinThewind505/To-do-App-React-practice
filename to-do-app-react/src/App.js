import React, { useState } from 'react';

import Form from './components/Form';
import Note from './components/Note';
import './App.css';

function App() {

  const [note, setNote] = useState([{
    id: 1,
    title: 'Title',
    body: 'Note'
  }])

  return (
    <div className="App">
      <header className="App-header">
        <img src="http://pngimg.com/uploads/birds/birds_PNG108.png" className="App-logo" alt="logo" />
        <Form />
        <Note note={note}/>
      </header>
      
    </div>
  );
}

export default App;
