import logo from './logo.svg';
import './App.css';
import React from "react";
import Axios from 'axios'

function App() {
  return (
    <div className="App">
      const [joke, setJoke] = useState("");
      const getJoke = () => {
        Axios.get('https://official-joke-api.appspot.com/random_joke').then(
          (response) => {
            setJoke(response.data.setup + "..." + response.data.punchline);
          }
        )
      }

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
        <button onclick={getJoke}>Make joke</button>
        {joke}
      </header>
    </div>
  );
}

export default App;
