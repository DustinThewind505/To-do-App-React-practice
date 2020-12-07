import React from 'react'
import Grocery from './Grocery'


function GroceryList(props) {




    return(
        <>
        <div className='grocery-list'>
            {props.groceries.map(item => <Grocery grocery={item} toggleComplete={props.toggleComplete} />)}
        </div>
        <button onClick={() => props.clearComplete()}>Clear</button>
        </>
    )
}

export default GroceryList;