import React from "react";
import Numbers from "./Numbers";
import "./Numbers.scss"

const NumberButton = () => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    <div className="numberButtons"><Numbers /></div>
    </>
  );
};
export default NumberButton