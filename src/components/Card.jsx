import React, { useState } from "react";
import {
  CardStyles,
  CardImage,
  CardAverage,
} from "../styles/GridContaienrStyles";

function Card(props) {
  const [movie, setMovie] = useState(props.movie);
  const base_url = "https://image.tmdb.org/t/p/w300_and_h450_bestv2";

    const handleClick=()=>{
        props.clickedMovie(movie)
    }


  return (
    <CardStyles onClick={handleClick}>
      <CardAverage>
        <p>
          {String(movie.vote_average).substring(
            0,
            String(movie.vote_average).length - 1
          )}
        </p>
      </CardAverage>

      <CardImage
        src={`${base_url}${movie.poster_path}`}
        alt={movie.original_title}
      />
      <h3>{movie.original_title}</h3>
    </CardStyles>
  );
}

export default Card;
