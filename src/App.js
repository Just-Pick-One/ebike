import logo from './logo.svg';
import './App.css';
import { data } from './assets/ebike_data';

function App() {

  const fucare_gemini = data.ebikes[0]
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      Brand: {fucare_gemini.basic.brand}
      Model: {fucare_gemini.basic.model}
      Price: {fucare_gemini.basic.price}
    </div>
  );
}

export default App;
