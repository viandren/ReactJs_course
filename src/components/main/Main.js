import './Main.css';

import React from "react";
import { useState } from "react";

import Navbar from './navbar/Navbar.js';
import Results from './results/Results.js';

export default function Main(props) {

  const [sortBy, setSortBy] = useState("Release Date");
  const [filterByGenre, setFilterByGenre] = useState("all");

    return  <div className="main">
    <Navbar filterByGenre={setFilterByGenre}
          setSortBy={setSortBy}/>
    <Results sortBy={sortBy} setSelectedMovieId={props.setSelectedMovieId}
            filterByGenre={filterByGenre}
            searchByTitle={props.searchByTitle}
          editMovie={props.editMovie}
          deleteMovie={props.deleteMovie}/>
    </div>;
}