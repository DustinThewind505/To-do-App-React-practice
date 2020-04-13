import React from 'react';

const Note = props => {



    return (
        <div>
            {props.notes.map(element => (
                <div key={element.id}>
                    <h2>{element.title}</h2>
                    <h3>{element.body}</h3>
                </div>
            ))}
        </div>
    )
}

export default Note;