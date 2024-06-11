// Input.js
import React from 'react';

const Input = ({ type, name, required, label, toggleIconBtn, leftIconBtn, rightIconBtn, isToggle, handleSetIsToggle }) => {
  const handleChange = (e) => {
    if (type === 'text' && name !== 'Name') {
      // Only allow integer input
      const value = e.target.value;
      if (!/^\d*$/.test(value)) {
        e.preventDefault();
        return;
      }
    }
  };

  return (
    <div className="input-wrapper">
      {leftIconBtn}
      <label>{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        onChange={handleChange}
      />
      {rightIconBtn}
      {toggleIconBtn && (
        <button type="button" onClick={() => handleSetIsToggle(!isToggle)}>
          {toggleIconBtn}
        </button>
      )}
    </div>
  );
};

export default Input;
