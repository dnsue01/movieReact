import React, { useState, useEffect } from "react";
import { Grid, CardStyles } from "../styles/GridContaienrStyles";
import Card from "./Card";

function CardContainer(props) {
  const [movies, setMovies] = useState(props.movies);
  const base_url = "https://image.tmdb.org/t/p/w300_and_h450_bestv2";
  const [averge, setAverage] = useState("");

  useEffect(() => {
    setMovies(props.movies);
  }, [props]);

  const clickedMovie = (clickedMovie) => {
    props.clickedMovie(clickedMovie);
  };
  return (
    <Grid>
      {movies.map((movie) => (
        <CardStyles key={movie.id}>
          <Card movie={movie} clickedMovie={clickedMovie} />
        </CardStyles>
      ))}
    </Grid>
  );
}

export default CardContainer;
