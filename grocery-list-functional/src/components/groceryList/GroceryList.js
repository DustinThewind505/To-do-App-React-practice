// ============ IMPORTS ============
import React from 'react';
import Grocery from './Grocery';


function GroceryList(props) {
    // ============ STATE ============

    // ============ FUNCTIONS ============


    // ============ COMPONENT ============
    return (
        <>
            <div className='grocery-list'>{props.groceries.map(element => <Grocery grocery={element} />)}</div>
            <button>Clear</button>
        </>
    )
}

export default GroceryList;