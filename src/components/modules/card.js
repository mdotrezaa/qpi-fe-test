import React from "react";
import { Profile } from "../elements/image";
import { Text } from "../elements/text";

export const Card = (props) => {
  const { onClick, type, children } = props;
  return (
    <>
      <div onClick={onClick} className={`card-${type} text-center`}>
        {children}
      </div>
    </>
  );
};
