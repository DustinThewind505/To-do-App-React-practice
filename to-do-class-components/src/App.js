// ============ IMPORTS ============
import React from 'react';
import { Notes } from './components/noteList';
import { Form } from './components/form';

import { v4 as uuid } from 'uuid'
import logo from './logo.svg';
import './App.css';

const initialNotes = [
  {
    id: uuid(),
    title: 'Practice coding',
    body: 'Mess with some APIs',
    complete: false
  },
  {
    id: uuid(),
    title: 'Excercise',
    body: 'Go on a long walk',
    complete: false
  }
]

class App extends React.Component {
  constructor() {
    super();
    // ============ STATE ============
    this.state = {
      notes: initialNotes
    }
  }

  // ============ FUNCTIONS ============
  addNewNote = (note) => {
    const newNote = {
      id: uuid(),
      title: note.title,
      body: note.body,
      complete: false
    }

    this.setState({ notes: [...this.state.notes, newNote] })
  }

  toggleComplete = noteId => {
    const reRenderNoteList = this.state.notes.map(note => {
      if(noteId === note.id) {
        return {
          ...note,
          complete: !note.complete
        }
      } else {
        return note
      }
    })

    this.setState({notes: reRenderNoteList})
  }

  clearComplete = () => {
    const clearedCompleted = this.state.notes.filter(note => note.complete === false)

    this.setState({notes: clearedCompleted})
  }


  // ============ COMPONENT ============
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Notes App FP</h1>
        </header>
        <Form addNewNote={this.addNewNote} />
        <Notes notes={this.state.notes} toggleComplete={this.toggleComplete} clearComplete={this.clearComplete} />
      </div>
    );
  }
}

export default App;
