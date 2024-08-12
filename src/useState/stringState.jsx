import React, { useState } from "react";

const UpdateString = () => {
  const [text, setText] = useState("Hello, World!");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h2 className="text-center">Current Text: {text}</h2>
      <div className="w-50 m-auto">
        <input
          type="text"
          value={text}
          onChange={handleChange}
          className="form-control"
          placeholder="Type something here..."
        />
      </div>
    </div>
  );
};

export default UpdateString;
