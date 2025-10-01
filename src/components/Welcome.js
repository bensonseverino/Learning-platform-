import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <h1 className="text-3xl font-bold ">
        Welcome {this.props.name} a.k.a {this.props.heroName}
      </h1>
    );
  }
}

export default Welcome;
