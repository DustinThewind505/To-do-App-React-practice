import React from 'react';



function Grocery(props) {



    return (
        <div onClick={() => props.toggleComplete(props.grocery.id)} className={`grocery ${props.grocery.complete === true ? 'complete' : ''}`}>
            <p>{props.grocery.item}</p>
        </div>
    )
}

export default Grocery;