import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    return (
      <div>
        <div className="flex flex-col items-center justify-center min-h-screen gap-4 text-3xl font-bold">
          Count - {this.state.count}
        </div>
        <button
          onClick={() => this.increment()}
          className="bg-blue-500 text-gray-200 px-4 p-3"
        >
          increment
        </button>
      </div>
    );
  }
}

export default Counter;
