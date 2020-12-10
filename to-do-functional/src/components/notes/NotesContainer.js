import React from 'react';
import Note from './Note';



function NotesContainer({notes, toggleComplete}) {




    return(
        <>
        <h2>Notes</h2>
        <div className='notes-container'>
            {notes.map(note => <Note note={note} toggleComplete={toggleComplete} />)}
        </div>
        </>
    )
}

export default NotesContainer;