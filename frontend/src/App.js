import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <form action="http://localhost:8080/user/login" method="post">
            <input type="text" name="username"/>
            <input type="password" name="password" />
            <button type="submit">login</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
