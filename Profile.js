import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Profile = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`card ${theme}`}>
      <h2>Profile</h2>
      <p>Student Name: Gayathri Devi</p>
      <p>Roll No: 22KQ1A05XX</p>
    </div>
  );
};

export default Profile;
