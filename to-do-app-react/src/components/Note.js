import React from 'react';

const Note = props => {


    return(
        <section>
            {props.notes.map(element => 
                <div 
                className={`note ${element.complete ? "complete" : ""}`}
                onClick={() => props.toggleComplete(element.id)}>
                    <h3>{element.title}</h3>
                    <p>{element.body}</p>
                </div>
            )}
        </section>
    )
}

export default Note;