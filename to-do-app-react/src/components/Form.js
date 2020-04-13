import React, { useState } from 'react';

const Form = props => {
    const [heading, setHeading] = useState('')
    const [note, setNote] = useState({
      title: '',
      body: ''
    })

    const handleChange = event => {
        setNote({...note, [event.target.name]: event.target.value})
    }

    const handleSubmit = event => {
      event.preventDefault();
      props.addNewNote(note);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                Title: <input onChange={handleChange} name="title"/>
                </label>
                <label>
                    Note: <textarea onChange={handleChange} name="body"/>
                </label>
                <button type="submit">Add Note</button>
            </form>
            <h1>{heading}</h1>
        </div>
    )
}
export default Form;