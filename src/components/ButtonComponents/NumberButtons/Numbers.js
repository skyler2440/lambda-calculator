import React, {useState} from "react";
import { numbers } from "../../../data";
//import any components needed

//Import your array data to from the provided data file

const Numbers = (item) => {
  // STEP 2 - add the imported data to state
  useState({numbers})
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       
       {numbers.map(item => <button>{item}</button>)}
    </div>
  );
};
export default Numbers;