import React from "react";

const Input = ({
  value,
  onChange,
  placeholder,
  className = "",
  type = "text",
  ...props
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full bg-primary-light text-gray-100 p-3 rounded-lg 
        placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent
        transition-shadow duration-200 ${className}`}
      {...props}
    />
  );
};

export default Input;
