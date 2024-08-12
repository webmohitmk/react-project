import React from "react";
import Child from "./child";
//arrow function component
const Parent = () => {
  let student_name = "Tushar";
  let student_age = 45;
  return (
    <div className="bg-primary d-flex justify-content-center flex-column">
      <div>
        <h2> Hello from Parent Component </h2>
        <Child Name={student_name} Age={student_age} />
      </div>
    </div>
  );
};

export default Parent;
