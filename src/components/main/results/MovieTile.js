import DropDown from './DropDown';
import './MovieTile.css';

import React from "react";
import { useState } from "react";

import Dialog from '../../dialogs/Dialog.js';
import MovieForm from '../../forms/MovieForm.js';
import ReactDOM from 'react-dom';

export default function MovieTile(props) {

    const [showDropdown, setShowDropdown] = useState(false);

    const openDialog = () => {
        setDialogIsOpen(true);
    }
    const closeDialog = (e) => {
        setDialogIsOpen(false);
    }
    const submitDialog = (e) => {
        console.log(e);
        setDialogIsOpen(false);
        props.editMovie(e);
    }
    const [dialogIsOpen, setDialogIsOpen] = useState(false);

    const dialog = <Dialog closeDialog={closeDialog} title="Edit movie" 
    children={<MovieForm movie={props.movie} onSubmit={submitDialog}/>} dialogIsOpen={dialogIsOpen}></Dialog>;

    const portal = ReactDOM.createPortal( dialog, document.body);

    let dropdownContent = showDropdown ? <DropDown closeDropdown={setShowDropdown} editMove={props.editMove} 
    movie={props.movie} openDialog={openDialog}/> : ""

return (
    <>
    {portal}
    <div className="movie-tile" data-testid="movieTile" onClick={() => props.handler(props.movie.id)}> 
        <div className="context-icon" onClick={(event) => {event.stopPropagation();setShowDropdown(!showDropdown);}}></div>
        {dropdownContent}
        <img className="poster" src={props.movie.imageUrl} alt="" />
        <div className="title-row">
            <div className="title">{props.movie.title}</div>
            <div className="release-year">{props.movie.releaseYear}</div>
        </div>
        <div className="genres">{props.movie.genres.join(', ')}</div>
    </div>
    </>
  )
}
