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
            <input placeholder="Ello Poppet" value={inputState} onChange={handleChange} />
            <p>{inputState}</p>
        </form>
    )
}

export default ToDoInput;