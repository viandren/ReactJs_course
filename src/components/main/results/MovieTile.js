import DropDown from './DropDown';
import './MovieTile.css';

import React from "react";
import { useState } from "react";

export default function MovieTile(props) {

    const [showDropdown, setShowDropdown] = useState(false);
    let dropdownContent = showDropdown ? <DropDown closeDropdown={setShowDropdown} /> : ""

return (
    <div className="movie-tile" data-testid="movieTile" onClick={() => props.handler(props.movie.id)}> 
        <div className="context-icon" onClick={(event) => {event.stopPropagation();setShowDropdown(!showDropdown);}}></div>
        {dropdownContent}
        <img className="poster" src={"/movie-posters/" + props.movie.imageUrl} alt="" />
        <div className="title-row">
            <div className="title">{props.movie.title}</div>
            <div className="release-year">{props.movie.releaseYear}</div>
        </div>
        <div className="genres">{props.movie.genres}</div>
    </div>
  )
}
