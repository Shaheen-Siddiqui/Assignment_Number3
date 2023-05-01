// Create a slider input in React which will set the border radius of a card on a change in the value of the range.

import { useState } from "react";

export const CardWithRoundedCorner = () => {
  const [customRadius, setCustomRadius] = useState(0);
  const customRadiusHandler = (event) => {
    setCustomRadius(event.target.value);
  };

  console.log(customRadius);

  return (
    <div className="leftside-div">
      <strong>Card with rounded corners</strong>
      <hr />
      <div
        style={{
          border: "2px solid black",
          height: "10rem",
          borderRadius: `${customRadius}px`
        }}
      >
        <input
          type="range"
          name="my-slider"
          id="my-slider"
          min="0"
          max="50"
          value={customRadius}
          onChange={customRadiusHandler}
          style={{ margin: "4rem 0 0 9rem" }}
        />
      </div>
      <div></div>
    </div>
  );
};
