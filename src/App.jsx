import React, { Component } from "react";
import "./App.css";
// import Greet from "./components/Greet";
// import Welcome from "./components/Welcome";
// import Message from "./components/Message";
// import Counter from "./components/Counter";
// import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <main className="overflow-x-hidden bg-white text-dark">
        {/* <Navbar /> */}
        <Hero />
        <Services />
        <Banner />
        <Subscribe />
        <Banner2 />
        <Footer />
      </main>
    );
  }
}

export default App;
