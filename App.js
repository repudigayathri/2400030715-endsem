import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import Dashboard from "./Dashboard";
import Profile from "./Profile";

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="container">
      <h1>KL Student Portal</h1>

      <button className="toggle-btn" onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>

      <Dashboard />
      <Profile />
    </div>
  );
};

export default App;
