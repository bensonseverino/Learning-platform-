import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome visitor",
    };
  }
  changeMessage() {
    this.setState({
      message: "Thank you for subscribing",
    });
  }

  render() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <h1 className="text-3xl font-bold">{this.state.message}</h1>
        <button
          onClick={() => this.changeMessage()}
          className="bg-blue-500 text-gray-200 px-4 p-3"
        >
          Subscribe
        </button>
      </div>
    );
  }
}

export default Message;
