import React from "react";
import "./InputBox.css";

interface InputBoxProps {
  inputType: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export const InputBox: React.FC<InputBoxProps> = ({ inputType, placeholder, value, onChange }) => {
  return (
    <div className="input-box">
      <input
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};