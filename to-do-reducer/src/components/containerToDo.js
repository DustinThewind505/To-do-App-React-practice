import React from "react";

import ToDo from './toDo';


function ToDoContainer(props) {



    return (
        <>
        <p>{Date()}</p>
        <section className='todo-container'>
            {props.toDoState.todos.map((todo, index) => 
                <ToDo key={index} todo={todo} dispatch={props.dispatch} />
            )}
        </section>
        </>
    )
}

export default ToDoContainer;