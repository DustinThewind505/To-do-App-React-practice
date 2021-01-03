import React, { useState } from "react";



function ToDoInput(props) {
    const [inputState, setInputState] = useState();

    const handleChange = e => {
        const newInputState = e.target.value;

        setInputState(newInputState);
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.dispatch({type: 'ADD_NEW_TODO', payload: inputState})

        setInputState("")
    }


    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="enter task" value={inputState} onChange={handleChange} />
        </form>
    )
}

export default ToDoInput;