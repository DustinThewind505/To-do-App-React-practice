import React, { useState } from 'react';

const Form = props => {
  const [note, setNote] = useState({
    title: '',
    body: ''
  })

  const handleChange = event => {
    setNote({ ...note, [event.target.name]: event.target.value });
    console.log(note)
  }

  const handleSubmit = event => {
    event.preventDefault();
    props.addNewNote(note);
    setNote({
      title: '',
      body: ''
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="note-example">
          <h2>{note.title}</h2>
          <p>{note.body}</p>
        </div>
        <label>
          Title: <input name="title" onChange={handleChange} value={note.title} />
        </label>
        <label>
          Note: <textarea name="body" onChange={handleChange} value={note.body} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form;