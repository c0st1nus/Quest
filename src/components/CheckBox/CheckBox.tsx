import React, { useState } from "react";
import "./CheckBox.css";

interface CheckBoxProps {
  label: string;
  onChange: (checked: boolean) => void; 
}

export const CheckBox: React.FC<CheckBoxProps> = ({ label, onChange }) => {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
    onChange(!checked);
  };

  return (
    <label className="checkbox-container">
      <input type="checkbox" checked={checked} onChange={handleCheck} />
      <span className="checkmark"></span>
      {label}
    </label>
  );
};