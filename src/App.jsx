import "./App.css";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState("Greeting Message");

  const sayHelloInThai = () => {
    setMessage("สวัสดี!");
  };

  const sayHelloInEngling = () => {
    setMessage("Hi!");
  };

  const sayHelloInChinese = () => {
    setMessage("你好!");
  };

  return (
    <div className="App">
      <div className="greeting-container">{message}</div>
      <div className="buttons">
        <button onClick={sayHelloInThai}>สวัสดี!</button>
        <button onClick={sayHelloInEngling}>Hi!</button>
        <button onClick={sayHelloInChinese}>你好!</button>
      </div>
    </div>
  );
}

export default App;
