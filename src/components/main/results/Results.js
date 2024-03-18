import './Results.css';

import React from "react";
import { useState } from "react";
import MovieTile from './MovieTile';

export default function Results(props) {

    const data = props.movies;
return (
    <div className="results" data-testid="results">
        {data.map(function(movie, i){
        return  <MovieTile movie={data[i]} handler={props.handler} key={i} editMovie={props.editMovie}/>;})
        }
    </div>
  )
}
