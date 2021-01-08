import "./App.css";
import Greet from "./components/Greet";
import React, { Component } from "react";
import Welcome from "./components/Welcome";
import HookCounter from "./components/HookCounter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HookCounter />
      </div>
    );
  }
}

export default App;
