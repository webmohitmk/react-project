import React from "react";

const Child = (props) => {
  return (
    <div>
      <h2> HEllo from Child Component my name is {props.Name} </h2>
      <h4> Any my age is {props.Age}</h4>
    </div>
  );
};

export default Child;
