import './Main.css';

import React from "react";
import { useState } from "react";

import Navbar from './navbar/Navbar.js';
import Results from './results/Results.js';

export default function Main(props) {

    return  <div className="main">
    <Navbar filterByGenre={props.filterByGenre}
          setSortBy={props.setSortBy}/>
    <Results handler={props.handleSelection}
          movies={props.movies}
          editMovie={props.editMovie}/>
    </div>;
}