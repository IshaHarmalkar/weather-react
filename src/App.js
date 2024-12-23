import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <h1>React Debugging</h1>
      <Weather city="Goa" />
      <div>
        <a
          href="https://github.com/IshaHarmalkar/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </div>
    </div>
  );
}

export default App;
