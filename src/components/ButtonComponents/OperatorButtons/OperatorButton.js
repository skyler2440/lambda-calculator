import React from "react";
import Operators from "./Operators";
import "./Operators.scss";
const OperatorButton = () => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <div className="operatorButtons"><Operators /></div>
    </>
  );
};
export default OperatorButton;