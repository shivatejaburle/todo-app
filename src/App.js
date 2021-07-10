import logo from './logo.svg';
import './App.css';

import List from './components/List';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ToDo App.
        </p>
        <h1>Hello Shivateja Burle!</h1>        
        <List itemsList = {["My ToDo Item1", "My ToDo Item2", "My ToDo Item3"]} />
        <List itemsList = {["My ToDo Item4", "My ToDo Item5", "My ToDo Item6"]} />        
      </header>
    </div>
  );
}

export default App;
