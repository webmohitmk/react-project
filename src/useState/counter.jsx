import React from "react";

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const IncrementFunction = () => {
    setCount(count + 2);
  };

  const DecrementFunction = () => {
    setCount(count - 2);
  };

  return (
    <div>
      <h2 className="text-center">The current Counter Value is {count}</h2>
      <div className="w-25 m-auto gap-2 d-flex">
        {/* <button onClick={() => setCount(count - 1)}> CLick to decrement</button> */}

        <button onClick={DecrementFunction}> CLick to decrement</button>
        <button onClick={IncrementFunction}> CLick to increment</button>
      </div>
    </div>
  );
};

export default Counter;
