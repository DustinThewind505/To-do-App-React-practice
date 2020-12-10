import React from 'react';



function Note({ note, toggleComplete }) {




    return (
        <div onClick={() => toggleComplete(note.id)} className={`note ${note.complete ? 'complete' : ''}`} >
            <h3>{note.title}</h3>
            <p>{note.body}</p>
        </div>
    )
}

export default Note;