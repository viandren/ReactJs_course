import './Navbar.css';

import React from "react";

import GenreSelect from './GenreSelect.js';
import SortControl from './SortControl.js';

export default function Navbar(props) {


    return   <div className="navbar">
        <GenreSelect 
      genreList={["all", "horror","comedy","fantasy","romance","adventure", "action", "drama"]}
      selected="all"
      onSelect={(genre) => {props.filterByGenre(genre);}} />
      <SortControl sortByOptions={["Release Date", "Title"]} setSortBy={props.setSortBy} defaultValue="Release Date"/>
      </div>;
}