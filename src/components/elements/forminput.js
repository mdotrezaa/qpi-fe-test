import React, { useState } from "react";
import { Text } from "./text";

function FormInput(props) {
  const [inputType] = useState(props.type);
  const [inputSize] = useState(props.size);
  const { inputValue, onChange,inputName ,placeholder } = props;

  return (
    <>
    <div>
      {props.label ? <label> {props.label + ":"}</label> : ""}
      <input
        type={inputType}
        value={inputValue}
        name={inputName}
        onChange={onChange}
        placeholder={placeholder}
        className={`inputclass input-${inputSize}`}
      /> {inputType == "checkbox" ? <Text headingLevel="span" color="white">{inputValue}</Text> : ""}
      </div>
    </>
  );
}
export default FormInput;
