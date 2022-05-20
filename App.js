import logo from './logo.svg';
import './App.css';

 const App = () => {
  return (
    
      <div className="app">
        <h1>Hello Aspiring Web Devs</h1>
        <p>
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link" href="https://reactjs.org"
            target="_blank" rel="noopener noreferrer"
          >
            <h3>Learn React</h3>
          </a>
        </p>
        
      </div>
    
  );
}

export default App;

