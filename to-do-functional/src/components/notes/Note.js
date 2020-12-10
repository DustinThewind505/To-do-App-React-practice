import React from 'react';



function Note({ note }) {




    return (
        <div className='note'>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
        </div>
    )
}

export default Note;