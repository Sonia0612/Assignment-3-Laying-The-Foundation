import React from "react";
import ReactDOM from "react-dom/client";

//Create Nested elements in React using REACT --create elements

let parent = React.createElement("div", { id: "title" }, [
  React.createElement("h1", {}, "Hello WOrld in React!!"),
  React.createElement("h2", {}, "Hello WOrld in React!!"),
  React.createElement("h3", {}, "Hello WOrld in React!!"),
]);

//React element
const elem=<p>Hey!! I'm elem</p>


//Using JSX
let parent1 = (
  <div id="title">
    <h1>Hello WOrld in React!!</h1>
    <h2>Hello WOrld in React!!</h2>
    <h3>Hello WOrld in React!!</h3>
  </div>
);

//Using functional component
const Func=() => {
  return (
    <div id="title">
      <h1>Hello WOrld in React!!</h1>
      <h2>Hello WOrld in React!!</h2>
      <h3>Hello WOrld in React!!</h3>
    </div>
  );
};
//Composition of Component 
const Compi=(props)=>{
    return (
        <>
        {/* If no attributes passed then call this way */}
            <Func/>
            
            {/* using react elem */}
            {elem}
            {" "} {props.name}
            <p>Hi!! I'm component inside component</p>
        </>
    )
}


let root = ReactDOM.createRoot(document.getElementById("root"));

//Passing attributes in React
root.render(<Compi name="React"></Compi>);
