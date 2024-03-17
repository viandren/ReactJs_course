import './Header.css';

import React from "react";
import { useState } from "react";

import SearchForm from './SearchForm.js';
import MovieDetails from './MovieDetails.js';
import Dialog from '../dialogs/Dialog.js';
import MovieForm from '../forms/MovieForm.js';

export default function Header(props) {

  const searchFormProps = {};
  searchFormProps.initialQuery = "What do you want to watch?";
  searchFormProps.onSearch = (query) => {props.filterByText(query)}

    let headerContent;
    if (props.movie === undefined){headerContent = <SearchForm { ...searchFormProps} />}
    else {headerContent = <MovieDetails  movie={ props.movie}/>}    
    
    
    const openDialog = () => {
        setDialogIsOpen(true);
    }
    const closeDialog = (e) => {
        console.log(e);
        setDialogIsOpen(false);
    }
    const [dialogIsOpen, setDialogIsOpen] = useState(false);
    
    const searchIcon = props.movie === undefined 
            ? <button className="add-button" onClick={openDialog} >+ add movie</button>
            : <img className="magnifier-icon" src="/magnifier.svg" 
                onClick={() => props.handleSelection(-1)} alt="search icon"></img>;

    const height = props.movie === undefined ? "30%" : "50%";

    return  <div className="header" style={{height: height, transition: "height 0.15s ease-out"}}>
        <img className="header-bg" src="/netflix_image.jpg" alt="background"></img>
        <Dialog closeDialog={closeDialog} title="Add movie" children={<MovieForm onSubmit={closeDialog}/>} dialogIsOpen={dialogIsOpen}></Dialog> 
        <div className="text-title-row">
            <span className="text-netflix">netflix</span>
            <span className="text-roulette">roulette</span>

            {searchIcon}
        </div>
        {headerContent}
        </div>;
}