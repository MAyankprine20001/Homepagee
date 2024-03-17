import React, { useEffect, useState } from "react";
import "./Input.scss";

const Input = ({ placeholder, className, inputOnChange }) => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    inputOnChange;
  }, [value]);

  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        className={className}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
