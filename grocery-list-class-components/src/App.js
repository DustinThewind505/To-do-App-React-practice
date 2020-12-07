// ============ IMPORTS ============
import React from 'react';
import { v4 as uuid } from 'uuid';

import { GroceryList } from './components/groceries';
import { SearchForm } from './components/searchForm';

import logo from './logo.svg';
import './App.css';

const initialGroceries = [
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
      groceries: initialGroceries
    }
  }

  // ============ METHODS ============
  addNewItem = itemName => {
    const newItem = {
      id: uuid(),
      item: itemName,
      complete: false
    }

    this.setState({
      groceries: [...this.state.groceries, newItem]
    })
  };

  toggleComplete = clickedId => {
    const newTaskList = this.state.groceries.map(item => {
      if (item.id === clickedId) {
        return {
          ...item,
          complete: !item.complete
        };
      } else {
        return item;
      }
    });

    this.setState({
      groceries: newTaskList
    });
  };

  clearComplete = () => {
    const clearedCompleted = this.state.groceries.filter(item => item.complete === false)

    this.setState({
      groceries: clearedCompleted
    })
  }


  // ============ COMPONENT ============
  render() {
    console.log('The array', this.groceries)
    return (
      <div className="App">
        <header className="App-header">
          <h1>Grocery List</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <SearchForm addNewItem={this.addNewItem} />
        <GroceryList groceries={this.state.groceries} toggleComplete={this.toggleComplete} clearComplete={this.clearComplete} />
      </div>
    );
  }

}

export default App;
