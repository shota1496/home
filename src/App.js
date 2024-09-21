import logo from "./logo.svg";
import maria from "./maria.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <hr />
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo_2" alt="logo" />
          <img src={logo} className="App-logo_1" alt="logo" />
          <img src={logo} className="App-logo_2" alt="logo" />
          <img src={logo} className="App-logo_1" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <hr />
        <h1>指出毬亜の差し出がましいようですが</h1>
        <img src={maria} className="App-logo" alt="logo" />
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
      </header>
    </div>
  );
}

export default App;
