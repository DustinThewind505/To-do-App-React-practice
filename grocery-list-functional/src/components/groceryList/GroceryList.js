// ============ IMPORTS ============
import React from 'react';
import Grocery from './Grocery';


function GroceryList(props) {


    // ============ COMPONENT ============
    return (
        <>
            <div className='grocery-list'>{props.groceries.map(element => <Grocery grocery={element} toggleComplete={props.toggleComplete} />)}</div>
            <button onClick={() => props.clearComplete()}>Clear</button>
        </>
    )
}

export default GroceryList;