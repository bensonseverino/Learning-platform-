import React, { Component } from "react";
import "./App.css";
// import Greet from "./components/Greet";
// import Welcome from "./components/Welcome";
// import Message from "./components/Message";
// import Counter from "./components/Counter";
// import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero/Hero";

class App extends Component {
  render() {
    return (
      <main className="overflow-x-hidden bg-white text-dark">
        {/* <Navbar /> */}
        <Hero />
      </main>
    );
  }
}

export default App;
