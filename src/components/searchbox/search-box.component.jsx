import React from "react";
import "./search-box.style.css";
export const SearchBox = ({ Placeholder, eventHandler }) => {
  return (
    <>
      <input
        className="search"
        type="search"
        placeholder={Placeholder}
        onChange={eventHandler}
      ></input>
    </>
  );
};
