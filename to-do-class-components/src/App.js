// ============ IMPORTS ============
import { Notes } from './components/noteList';
import { Form } from './components/form';

import logo from './logo.svg';
import './App.css';

function App() {
  // ============ STATE ============


  // ============ FUNCTIONS ============


  // ============ COMPONENT ============
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Notes App FP</h1>
      </header>
      <Notes />
      <Form />
    </div>
  );
}

export default App;
