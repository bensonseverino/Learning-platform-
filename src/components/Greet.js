import React from "react";

// function Greet() {
//   return <h1 className="text-3xl font-bold ">Hello, Greet Component!</h1>;
// }
const Greet = (props) => {
  console.log(props);
  return (
    <div>
      <h1 className="text-3xl font-bold ">
        Hello, {props.name} a.k.a {props.heroName}
      </h1>
      {props.children}
    </div>
  );
};

export default Greet;
