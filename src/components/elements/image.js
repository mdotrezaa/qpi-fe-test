import React from "react";

export const Image = (props) => {
  return (
    <div className="flex-1">
        <span className="icon">C</span>
      <img className="profile" src={require("../../assets/images/user.png")} />
    </div>
  );
};
