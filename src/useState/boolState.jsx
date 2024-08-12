import React, { useState } from "react";

const ToggleText = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <h2 className="text-center">Toggle Text Visibility</h2>
      <div className="w-50 m-auto text-center">
        <button onClick={toggleVisibility} className="btn btn-primary mb-3">
          {isVisible ? "Hide Text" : "Show Text"}
        </button>
        {isVisible && <p>This text can be toggled on and off.</p>}
      </div>
    </div>
  );
};

export default ToggleText;
