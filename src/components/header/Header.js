import './Header.css';

import React from "react";
import { useState } from "react";

import SearchForm from './SearchForm.js';
import MovieDetails from './MovieDetails.js';
import Dialog from '../dialogs/Dialog.js';
import MovieForm from '../forms/MovieForm.js';

export default function Header(props) {

  const searchFormProps = {};
  searchFormProps.placeholderText = "What do you want to watch?";
  searchFormProps.setSearchByTitle = props.setSearchByTitle

    let headerContent;
    if (props.selectedMovieId === undefined){headerContent = <SearchForm { ...searchFormProps} />}
    else {headerContent = <MovieDetails  selectedMovieId={ props.selectedMovieId}/>}    
    
    
    const openDialog = () => {
        setDialogIsOpen(true);
    }
    const closeDialog = () => {
        setDialogIsOpen(false);
    }
    const submitDialog = (e) => {
        console.log(e);
        setDialogIsOpen(false);
        props.addMovie(e);
    }
    const [dialogIsOpen, setDialogIsOpen] = useState(false);

    const closeMovieDetails = () => {
        props.setSelectedMovieId(undefined);
        props.setSearchByTitle('');
    }
    
    const searchIcon = props.selectedMovieId === undefined 
            ? <button className="add-button" onClick={openDialog} >+ add movie</button>
            : <img className="magnifier-icon" src="/magnifier.svg" 
                onClick={closeMovieDetails} alt="search icon"></img>;

    const height = props.selectedMovieId === undefined ? "30%" : "50%";

    return  <div className="header" style={{height: height, transition: "height 0.15s ease-out"}}>
        <img className="header-bg" src="/netflix_image.jpg" alt="background"></img>
        <Dialog closeDialog={closeDialog} title="Add movie" children={<MovieForm onSubmit={submitDialog}/>} dialogIsOpen={dialogIsOpen}></Dialog> 
        <div className="text-title-row">
            <span className="text-netflix">netflix</span>
            <span className="text-roulette">roulette</span>

            {searchIcon}
        </div>
        {headerContent}
        </div>;
}