import { useEffect, useState } from "react";
import { fakeFetch } from "../6-Tweets/fakeFetch";

// Create a React component that fetches products data from an API endpoint using useEffect hook and display tweets (content, likes, views) as a list on the screen using the useState hook. Add a button on top, on click of which it displays only the tweets with more than 50 likes.
export const Tweets = () => {
  const [userTweets, setUserTweets] = useState([]);
  const [moreThan50, setMoreThan50] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function obtainUserTweeets() {
      try {
        setIsLoading(true);
        const response = await fakeFetch("https://example.com/api/usertweets");
        setUserTweets(response.data);
        setMoreThan50(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    obtainUserTweeets();
  }, []);
  const tweetHandler = () => {
    const filteredData = userTweets.filter(({ likes }) => likes > 50);
    setShowAll(!showAll);
    showAll ? setMoreThan50(userTweets) : setMoreThan50(filteredData);
  };

  return (
    <div className="leftside-div">
      <div style={{ marginLeft: "2rem" }}>
        <button className="btn btn-info" onClick={tweetHandler}>
          {showAll ? "Show All" : "Show tweets with more that 50 likes"}
        </button>
      </div>

      {isLoading ? (
        <h3>Liading...</h3>
      ) : (
        <>
          {moreThan50.map(({ id, content, likes, views }, index) => {
            return (
              <div className="tweet-container" key={index}>
                <h4>{content.toUpperCase()}</h4>
                <h3>
                  Likes: {likes} views: {views}
                </h3>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};
