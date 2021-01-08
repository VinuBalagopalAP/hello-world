import "./App.css";
import Greet from "./components/Greet";
import React, { Component } from "react";
import Welcome from "./components/Welcome";
import HookCounterTwo from "./components/HookCounterTwo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HookCounterTwo />
      </div>
    );
  }
}

export default App;
