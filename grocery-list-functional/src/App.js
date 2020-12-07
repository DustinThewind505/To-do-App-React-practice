// ============ IMPORTS ============
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import logo from './logo.svg';
import { SearchForm } from './components/searchForm';
import { GroceryList } from './components/groceryList';

import './App.css';

const initialGroceries = [
  {
    id: uuid(),
    item: 'Tortillas',
    complete: false
  },
  {
    id: uuid(),
    item: 'Beans',
    complete: false
  }
]

function App() {
  // ============ STATE ============
  const [groceries, setGroceries] = useState(initialGroceries);

  // ============ FUNCTIONS ============
  const addNewItem = itemName => {
    const newItem = {
      id: uuid(),
      item: itemName,
      complete: false
    }

    setGroceries([...groceries, newItem])
  }

  const toggleComplete = itemId => {
    const newList = groceries.map(grocery => {
      if(itemId === grocery.id) {
        return {
          ...grocery,
          complete: !grocery.complete
        }
      } else {
        return grocery
      }
    })

    setGroceries(newList)
  }

  const clearComplete = () => {
    const newList = groceries.filter(grocery => grocery.complete === false)

    setGroceries(newList)
  }

  // ============ COMPONENT ============
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Grocery List</h1>
      </header>
      <SearchForm addNewItem={addNewItem} />
      <GroceryList groceries={groceries} toggleComplete={toggleComplete} clearComplete={clearComplete} />
    </div>
  );
}

export default App;
