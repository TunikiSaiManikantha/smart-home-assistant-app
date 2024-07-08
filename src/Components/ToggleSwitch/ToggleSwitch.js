// ToggleSwitch.js
import React from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = ({ id, checked, onChange }) => {
  return (
    <div className="toggle-switch">
      <input 
        type="checkbox" 
        className="toggle-switch-checkbox" 
        id={`toggle-switch-${id}`} 
        checked={checked} 
        onChange={onChange} 
      />
      <label className="toggle-switch-label" htmlFor={`toggle-switch-${id}`}>
        <span className="toggle-switch-inner" />
        <span className="toggle-switch-switch" />
      </label>
    </div>
  );
};

export default ToggleSwitch;
