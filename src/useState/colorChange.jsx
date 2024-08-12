import React, { useState } from "react";

const ThemeToggle = () => {

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={isDarkTheme ? "dark-theme" : "light-theme"}>

      <h2 className="text-center">Toggle Theme Example</h2>
      <div className="w-50 m-auto text-center">

        <button onClick={toggleTheme} className="btn btn-primary mb-3">

          {isDarkTheme ? "Switch to Light Theme" : "Switch to Dark Theme"}
          
        </button>

        <p>This is an example of theme toggling using React hooks.</p>
      </div>
    </div>
  );
};

export default ThemeToggle;
