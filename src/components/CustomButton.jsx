import React from "react";

const CustomButton = ({ text, handleSubmit }) => {
  return (
    <button type="submit" className="filter-btn" >
      {text}
    </button>
  );
};

export default CustomButton;
