import React, { useState } from "react";

export const Button = (props) => {
  const [btnType] = useState(props.type);
  const { type, color, size,children, onClick } = props;
  return (
    <button type={btnType} onClick={onClick} className={`btn-${type} btn-${color} btn-${size}`}>
      {children}
    </button>
  );
};
