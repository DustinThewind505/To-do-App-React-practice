import React from 'react';
import Note from './Note';



function NotesContainer({notes}) {




    return(
        <div className='notes-container'>
            {notes.map(note => <Note note={note}/>)}
        </div>
    )
}

export default NotesContainer;