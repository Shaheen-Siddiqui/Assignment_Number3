// Create a Tabs component in React with four city name tabs. On click of each tab show some content about that city.
import { useState } from "react";

const data = [
  {
    id: 1,
    cityname: "London",
    cityContent:
      "London is the capital and largest city of England and the United Kingdom, with a population of just under 9 million. It stands on the River Thames in ..."
  },
  {
    id: 2,
    cityname: "Paris",
    cityContent:
      "Paris is located in northern central France, in a north-bending arc of the river Seine whose crest includes two islands, the Île Saint-Louis and the larger Île ..."
  },
  {
    id: 3,
    cityname: "Tokyo",
    cityContent:
      "Tokyo was called Edo for a very long time Its home to the worlds busiest intersection Tokyo is home to a robot hotel"
  },
  {
    id: 4,
    cityname: "NowYork",
    cityContent:
      "New York City is a global cultural, financial, entertainment, and media center with a significant influence on commerce, health care and life sciences, research ..."
  }
];
export const TabsComponent = () => {
  const [string, setString] = useState({ cityname: "", cityContent: "" });

  function showData(itemName) {
    const showNameAndContent = data.find((item) => item.id === itemName.id);
    setString({
      cityname: showNameAndContent.cityContent,
      cityContent: showNameAndContent.cityname
    });
  }

  return (
    <div className="leftside-div">
      <h1>Tab Component</h1>
      <hr />
      <div style={{ display: "flex" }}>
        {data.map((itemName, index) => {
          const { cityname } = itemName;
          return (
            <div key={index}>
              <button
                onClick={() => showData(itemName)}
                style={{ padding: "0.5rem" }}
              >
                {cityname}
              </button>
            </div>
          );
        })}
        <br />
        <br />
      </div>
      <strong>{string.cityContent}</strong>
      <p>{string.cityname}</p>
    </div>
  );
};
