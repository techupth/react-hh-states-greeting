import "./App.css";
import { useState } from "react";



function App() {
  const [showmsg, setShowMsg] = useState("Greeting Message");



  function onClickBtn(msg){
    setShowMsg(msg);
  }

  return (
    <div className="App">
      <div className="greeting-container">{showmsg}</div>
      <div className="buttons">
        <button onClick={() => onClickBtn("สวัสดี!")}>สวัสดี!</button>
        <button onClick={() => onClickBtn("Hi!")}>Hi!</button>
        <button onClick={() => onClickBtn("你好!")}>你好!</button>
      </div>
    </div>
  );
}

export default App;
