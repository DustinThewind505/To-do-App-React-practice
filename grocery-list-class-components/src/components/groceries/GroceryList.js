import React from 'react'
import Grocery from './Grocery'


function GroceryList(props) {




    return(
        <>
        <div className='grocery-list'>
            {props.groceries.map(item => <Grocery grocery={item} />)}
        </div>
        <button>Clear</button>
        </>
    )
}

export default GroceryList;