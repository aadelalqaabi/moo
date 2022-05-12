import "./App.css";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const handleNumber = () => {
    setNumber(number + 1);
  };
  return (
    <div className="App">
      <style>
        @import
        url('https://www.dafontfree.net/embed/aGFwcHktY293LWJvbGQmZGF0YS84MTkvaC8xODY5MDYvaGFwcHljb3cudHRm');
      </style>
      <div id="main">
        <h1>MOO CLICK</h1>
      </div>
      <div id="holder">
        <img
          onClick={() => {
            handleNumber();
            console.log("click");
          }}
          id="milk"
          src="https://icons.iconarchive.com/icons/chrisl21/minecraft/512/Bucket-Milk-icon.png"
        ></img>
        <h2>{number}</h2>
      </div>
    </div>
  );
}

export default App;
