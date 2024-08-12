import React, { useEffect, useState } from "react";

const CounterEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count value: ${count}`);
  }, [count]); // Dependency array: effect runs when 'count' changes

  return (
    <div>
      <h2 className="text-center"> The value of Counter is {count} </h2>
      <div className="w-25 m-auto gap-2 d-flex">
        <button onClick={() => setCount(count - 1)}> Click to decrement</button>

        <button onClick={() => setCount(count + 1)}> Click to Increase </button>
      </div>
    </div>
  );
};

export default CounterEffect;
