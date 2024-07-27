import React, { useState, useEffect } from "react";
import Header from "./Header";
import { main } from "../styles/MainStyles";
import useFetch from "../hooks/useFetch";

function Main() {
  const [searchedWord, setSearchedWord] = useState("");
  const [movies, setMovies] = useState(null);
  const [moviesCopy, setMoviesCopy] = useState(null);
  const [actualPage, setActualPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const { data, loading, error } = useFetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${actualPage}`
  );

  useEffect(() => {
    if (data) {
      setMovies(data.results);
      setMoviesCopy(data.results);
      setTotalPages(data.totalPages);
    }
  }, [data]);

  const captureSearchedWord = (word) => {
    setSearchedWord(word);

    let filterMovies = movies.filter((movie) =>
      movie.original_title.toLowerCase().includes(word.toLowerCase())
    );
    
    setMoviesCopy(filterMovies);
  };

  if (loading) return <h1>loading</h1>;
  if (error) return <h1>error</h1>;

  return (
    <main>
      <Header searchedWord={captureSearchedWord} />
      {moviesCopy && (
        <ol>
          {moviesCopy.map((movie) => (
            <li key={movie.id}>{movie.original_title}</li>
          ))}
        </ol>
      )}
    </main>
  );
}

export default Main;
