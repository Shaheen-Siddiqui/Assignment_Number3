import { useEffect, useState } from "react";
import { fakeFetch } from "./fakefetch";

// Create a React component that fetches chats from an API endpoint using useEffect hook and display chat data (chat message) as a list on the screen using the useState hook. Display "You: " before every odd message and "user: " at every even message.
export const ChatRoom = () => {
  const [chattings, setChattings] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    async function obtainChattingData() {
      try {
        setisLoading(true);
        const response = await fakeFetch("https://example.com/api/userchats");
        setChattings(response.data);
        setisLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    obtainChattingData();
  }, []);
  console.log(chattings);

  return (
    <div className="leftside-div">
      <h1>Chat Room</h1>
      <hr />
      {isLoading ? (
        <h4>Loading...</h4>
      ) : (
        <>
          {" "}
          {chattings.map((value, index) => {
            const isOdd = index % 2;
            return (
              <h3>
                <strong>
                  {isOdd ? " You" : "user"}: {value}
                </strong>
              </h3>
            );
          })}
        </>
      )}
    </div>
  );
};
