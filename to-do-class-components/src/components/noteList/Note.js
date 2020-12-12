// ============ IMPORTS ============
import React from 'react';




function Note(props) {

    // ============ COMPONENT ============
    return (
        <div className={`note ${props.note.complete === true ? 'complete' : ''}`} onClick={() => props.toggleComplete(props.note.id)}>
            <h2>{props.note.title}</h2>
            <p>{props.note.body}</p>
        </div>
    )
}

export default Note;