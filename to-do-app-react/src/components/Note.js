import React from 'react';

const Note = props => {



    return (
        <section>
            {props.notes.map(element => (
                <div className="note complete" key={element.id}>
                    <h2>{element.title}</h2>
                    <h3>{element.body}</h3>
                </div>
            ))}
        </section>
    )
}

export default Note;