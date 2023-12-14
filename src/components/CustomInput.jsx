import React from "react";

const CustomInput = ({ forAtt, name, type, id, placeholder }) => {
  return (
    <div>
      <label htmlFor={forAtt} style={{fontWeight: 'bolder', fontSize: '21px'}}>
        {name}
      </label>
      <input type={type} id={id} placeholder={placeholder} />
    </div>
  );
};

export default CustomInput;