// ============ IMPORTS ============
import React from 'react';
import { v4 as uuid } from 'uuid';

import { GroceryList } from './components/groceries';
import { SearchForm } from './components/searchForm';

import logo from './logo.svg';
import './App.css';

const groceries = [
  {
    id: uuid(),
    item: 'Tortillas',
    complete: false
  },
  {
    id: uuid(),
    item: 'Cheese',
    complete: false
  }
]



class App extends React.Component {
  // ============ STATE ============
  constructor() {
    super();
    this.state = {
      groceries: groceries
    }
  }

  // ============ METHODS ============
  handleSubmit = e => {
    e.preventDefault()
  }


  // ============ COMPONENT ============
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
            <h1>Grocery List</h1>
          
            <img src={logo} className="App-logo" alt="logo" />
          
        </header>
        <SearchForm handleSubmit={this.handleSubmit}/>
        <GroceryList groceries={this.state.groceries} />
      </div>
    );
  }

}

export default App;
