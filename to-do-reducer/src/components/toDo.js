import React from "react";



function ToDo(props) {


    return (
        <div className={`todo ${props.todo.complete ? 'complete' : ''}`} onClick={() => props.dispatch({ type: 'TOGGLE_COMPLETE', payload: props.todo.id })} >
            <h3>{props.todo.todo}</h3>
        </div>
    )
}

export default ToDo;