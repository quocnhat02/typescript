import React, { useState } from "react";

const ExampleFunctional = () => {
  const initialValues = () => {
    let total = 0;
    for (let i = 0; i < 100; i++) {
      total += i;
    }
    console.log("initialValue");
    return total;
  };
  const [count, setCount] = useState(() => {
    return initialValues();
  });

  const handleClick = () => {
    setCount((preState) => {
      return preState + 1;
    });
    setCount((preState) => {
      return preState + 1;
    });
  };
  return (
    <div>
      <pre>Functional Component</pre>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default ExampleFunctional;
