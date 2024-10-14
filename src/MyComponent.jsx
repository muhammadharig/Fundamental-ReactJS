// React Hooks = Special function that allows functional components
//               to use React features without writing class components (React v16.8)
//               (useState, useEffect, useReducer, useCallback, and more..)

// useState     = A React hook that allows the creation of stateful variables
//              AND a setter function to update its value in the virtual DOM.
//              [name, setName]

import React, { useState } from "react";
const MyComponent = () => {
  //  define state
  //   let [name, setName] = useState();
  const [name, setName] = useState("Guest"); // optional initial value or not, but can be empty
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    // name = "Spongebob";
    // console.log(name);
    setName("Spongebob");
  };

  const incrementAge = () => {
    setAge(age + 1);
  };

  const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment Age</button>

      <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={toggleEmployedStatus}>Toggle Status</button>
    </div>
  );
};

export default MyComponent;
