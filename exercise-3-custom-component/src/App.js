import Clickable from "./components/Clickable";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-Header">
        <a href="/home">Home</a>|<a href="/">Exercise 1</a>|
        <a href="/">Exercise 2</a>|<a href="/">Exercise 3</a>|
        <a href="/">Exercise 4</a>|<a href="/">Exercise 5</a>|
        <a href="/">Exercise 6</a>|<a href="/">Exercise 7</a>|
        <a href="/">Exercise 8</a>|<a href="/">Exercise 9</a>
      </div>
      <div className="App-Content">
        <Clickable name="Button 1" />
        <Clickable name="Button 2" />
        <Clickable name="Button 3" />
      </div>
    </div>
  );
}

export default App;
