import React from "react";



function ToDo(props) {




    return (
        <div className='todo'>
            <h3>{props.todo.todo}</h3>
        </div>
    )
}

export default ToDo;