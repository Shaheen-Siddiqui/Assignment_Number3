// Create a list of Grocery list items with checkboxes and as the user checks out the items those checked-out items should be listed in another section named ‘Completed list’. Add the list of items via an input field.

import { useState, useRef } from "react";
export const GroceryListItems = () => {
  const inputFieldRef = useRef(null);
  const [isDuplicate, setIsDuplicate] = useState("");

  const [items, setItems] = useState("");
  const [listedItems, setListedItems] = useState([]);
  const [CompletedItem, setCompletedItems] = useState([]);

  const GroceryItem = (event) => setItems(event.target.value);

  const addGroceryItems = (item) => {
    const removeDuplicate = listedItems.find((listValue) => listValue === item);

    if (!removeDuplicate && item !== "") {
      setListedItems([...listedItems, item]);
      setIsDuplicate("");
      inputFieldRef.current.value = "";
    } else if (inputFieldRef.current.value === "") {
      setIsDuplicate("input field is empaty");
    } else if (removeDuplicate === item) {
      setIsDuplicate("duplicate not allowed");
    }
  };

  const todoThatHaveToCompleate = (e, listedItemValue) => {
    e.target.checked &&
      setListedItems((listedItems) =>
        listedItems.filter((item) => item !== listedItemValue)
      );
    setCompletedItems([...CompletedItem, listedItemValue]);
  };

  return (
    <div className="leftside-div">
      <h2>
        <strong>Grocery List</strong>
        <hr />
      </h2>
      {isDuplicate ? (
        <h6 style={{ color: "red" }}>{isDuplicate}</h6>
      ) : (
        <h6>Play with Todo's</h6>
      )}
      <label htmlFor="addItems">Add Items</label>

      <input
        type="text"
        id="addItems"
        onChange={GroceryItem}
        ref={inputFieldRef}
        autoComplete="off"
      />
      <button
        onClick={() => addGroceryItems(items)}
        className="btn btn-info btn-sm"
      >
        Add
      </button>

      {listedItems.map((value, index) => {
        return (
          <ul key={index}>
            <li>
              <input
                type="checkbox"
                onChange={(e) => todoThatHaveToCompleate(e, value)}
                id={index}
                checked={false}
              />
              {value}
            </li>
          </ul>
        );
      })}
      {CompletedItem.length > 0 && (
        <>
          <h2>
            <strong>‘Completed List</strong>
          </h2>
          {CompletedItem.map((value, index) => {
            return (
              <ol key={index}>
                <li>{value}</li>
              </ol>
            );
          })}
        </>
      )}
    </div>
  );
};
