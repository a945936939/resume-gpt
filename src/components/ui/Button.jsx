import React from "react";

const Button = ({
  children,
  className = "",
  disabled = false,
  type = "button",
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors duration-200 
        ${
          disabled
            ? "bg-gray-600 cursor-not-allowed"
            : "bg-accent hover:bg-accent-dark text-white"
        } 
        rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary
        ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
