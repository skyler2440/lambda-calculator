import React from "react";
import Specials from "./Specials";
import "./Specials.scss"
const SpecialButton = () => {
  return (
    <>
      {/* Display a button elemen rendering the data being passed down from the parent container on props */}
      <div className="specialButtons"><Specials /></div>
    </>
  );
};
export default SpecialButton