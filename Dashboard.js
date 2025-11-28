import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Dashboard = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`card ${theme}`}>
      <h2>Dashboard</h2>
      <p>Welcome to the student dashboard!</p>
    </div>
  );
};

export default Dashboard;
