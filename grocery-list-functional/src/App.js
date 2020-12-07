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

  // ============ COMPONENT ============
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Grocery List</h1>
      </header>
      <SearchForm />
      <GroceryList groceries={groceries} />
    </div>
  );
}

export default App;
