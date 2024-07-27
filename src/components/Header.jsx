import React, { useState } from "react";
import { Styledheader } from "../styles/HeaderStyles";

function Header(props) {
  const [searchedWord, setSearchedWord] = useState("");

  const captureInput = (e) => {
    props.searchedWord(e.target.value)
    setSearchedWord(e.target.value);
  };

  return (
    <Styledheader>
      <h1>Movie db React</h1>
      <input
        type="text"
        value={searchedWord}
        placeholder="Searh for a movie"
        onChange={captureInput}
      />
    </Styledheader>
  );
}

export default Header;
