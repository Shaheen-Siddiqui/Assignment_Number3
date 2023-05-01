// Create a select dropdown that updates the background color of the page when a new color is selected.

import { useState } from "react";

export const SelectBackGroundColor = () => {
  const [bgColor, setBgColor] = useState("");
  const changeBackGroundHandler = (event) => {
    setBgColor(event.target.value);
  };
  console.log(bgColor);

  return (
    <div className="leftside-div">
      <h4 style={{ marginLeft: "7.5rem" }}>
        <strong>Set Background Color</strong>
      </h4>
      <select
        name="backgroundcolor"
        id="backgroundcolor"
        onChange={changeBackGroundHandler}
      >
        <option value="white">White</option>
        <option value="pink">Pink</option>
        <option value="black">Black</option>
        <option value="purple">purple</option>
        <option value="orange">orange</option>
        <option value="blue">blue</option>
      </select>
      <div
        className="filledwith-colors"
        style={{ backgroundColor: `${bgColor}` }}
      ></div>
    </div>
  );
};
