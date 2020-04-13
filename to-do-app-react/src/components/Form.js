import React, { useState } from 'react';

const Form = props => {
    const [heading, setHeading] = useState('')
    const [note, setNote] = useState({
      title: '',
      body: '',
      complete: false
    })

    const handleChange = event => {
        setNote({...note, [event.target.name]: event.target.value})
    }

    const handleSubmit = event => {
      event.preventDefault();
      props.addNewNote(note);
      setNote({
        title: '',
        body: '',
        complete: false
      })
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                Title: <input onChange={handleChange} name="title" value={note.title}/>
                </label>
                <label>
                    Note: <textarea onChange={handleChange} name="body" value={note.body}/>
                </label>
                <button type="submit">Add Note</button>
            </form>
            <h1>{heading}</h1>
        </div>
    )
}
export default Form;