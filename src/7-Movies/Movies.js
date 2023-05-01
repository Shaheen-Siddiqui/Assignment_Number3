// // Given a list of movies as an array of objects with properties id, title, rating, year and category. Create a React component to list down all movies with rating and year. Create radio buttons to filter by category. Create a dropdown to filter by rating. Fake fetch has been provided.

import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [movieRating, setMovieRating] = useState("");
  const [moviesCategory, setMovieCategory] = useState("");

  useEffect(() => {
    async function obtainMovieData(params) {
      setIsLoading(true);
      const response = await fakeFetch("https://example.com/api/movies");
      setMovies(response.data);
      setIsLoading(false);
    }
    obtainMovieData();
  }, []);

  const categoryHandler = (event) => setMovieCategory(event.target.value);
  const ratingChangeHandler = (event) => setMovieRating(event.target.value);

  const filteredMovies = movies.filter((movieData) => {
    if (!moviesCategory && !movieRating) {
      return true;
    } else if (moviesCategory !== "" && movieRating === "") {
      return movieData.category === moviesCategory;
    } else if (moviesCategory === "" && movieRating !== "") {
      return movieData.rating >= movieRating;
    } else {
      return (
        movieData.category === moviesCategory && movieData.rating >= movieRating
      );
    }
  });

  return (
    <div className="leftside-div" style={{ textAlign: "center" }}>
      <h4>
        <hr />
        <label htmlFor="">Rating filter</label>
        <select
          name=""
          id=""
          className="tweet-container"
          onChange={ratingChangeHandler}
        >
          <option value="">All</option>
          <option value="8.0">8.0+</option>
          <option value="8.5">8.5+</option>
          <option value="9.0">9.0+</option>
          <option value="9.5">9.5+</option>
        </select>
      </h4>
      <hr />
      <h4>
        <label>Category filter</label>--
        <label htmlFor="All">All</label>&nbsp;
        <input
          onChange={categoryHandler}
          type="radio"
          value=""
          id="All"
          checked={moviesCategory === ""}
        />
        <label htmlFor="Action">Action</label>&nbsp;
        <input
          onChange={categoryHandler}
          type="radio"
          value="Action"
          id="Action"
          checked={moviesCategory === "Action"}
        />
        <br />
        <label htmlFor="Crime">Crime</label>
        <input
          onChange={categoryHandler}
          type="radio"
          value="Crime"
          id="Crime"
          checked={moviesCategory === "Crime"}
        />
        , &nbsp;
        <label htmlFor="Drama">Drama</label>&nbsp;
        <input
          onChange={categoryHandler}
          type="radio"
          value="Drama"
          id="Drama"
          checked={moviesCategory === "Drama"}
        />
      </h4>
      <hr />
      <br />
      {isLoading ? (
        <h4>Loading...</h4>
      ) : (
        <>
          {!filteredMovies.length ? (
            <strong>No movie found with this rating...!</strong>
          ) : (
            <>
              {filteredMovies.map(({ id, title, rating, year, category }) => {
                return (
                  <h4 key={id}>
                    {title}
                    <p>
                      Rating: {rating} &nbsp; Year: {year}
                    </p>
                    category: <strong>{category}</strong>
                  </h4>
                );
              })}
            </>
          )}
        </>
      )}
    </div>
  );
};
