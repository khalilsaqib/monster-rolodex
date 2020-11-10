import React, { useState } from "react";

export const Title = () => {
  const [inputList, setInputList] = useState("Moster Rolodex");
  const setvalue = () => {
    setInputList("KILLSHOT");
  };
  const setvalue1 = () => {
    setInputList("Moster Rolodex");
  };
  return (
    <>
      <h1 onMouseEnter={setvalue} onMouseLeave={setvalue1}>
        {inputList}
      </h1>
    </>
  );
};
