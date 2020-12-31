import React from "react";

import ToDo from './toDo';


function ToDoContainer(props) {


console.log(props.toDoState)

    return (
        <>
        <p>{Date()}</p>
        <section className='todo-container'>
            {props.toDoState.todos.map((todo, index) => 
                <ToDo key={index} todo={todo} />
            )}
        </section>
        </>
    )
}

export default ToDoContainer;