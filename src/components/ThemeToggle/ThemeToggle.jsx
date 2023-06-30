import React, { useState } from 'react';
import { FiSun } from 'react-icons/fi';
import { FaMoon } from 'react-icons/fa';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  return (

    <div className='container'>
      <button onClick={toggleTheme} className="theme-toggle">
        {isLightTheme ? <FaMoon /> : <FiSun />}
      </button>
    </div>

  );
};

export default ThemeToggle;
