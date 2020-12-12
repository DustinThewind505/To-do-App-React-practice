// ============ IMPORTS ============
import React from 'react';
import Note from './Note';




function NotesContainer(props) {

    // ============ COMPONENT ============
    return (
        <>
        <div className='notes-container'>
            {props.notes.map(note => <Note note={note} toggleComplete={props.toggleComplete} />)}
        </div>
        <button onClick={props.clearComplete}>Clear Complete</button>
        </>
    )
}

export default NotesContainer;