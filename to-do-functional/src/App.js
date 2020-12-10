import './App.css';

import { Notes } from './components/notes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>To-Do App</h1>
      </header>
      <Notes />
    </div>
  );
}

export default App;
