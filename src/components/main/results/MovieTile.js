import DropDown from './DropDown';
import './MovieTile.css';

import React from "react";
import { useState } from "react";

import Dialog from '../../dialogs/Dialog.js';
import MovieForm from '../../forms/MovieForm.js';
import DeleteForm from '../../forms/DeleteForm.js';
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


    const openDeleteDialog = () => {
        setDeleteDialogIsOpen(true);
    }
    const closeDeleteDialog = (e) => {
        setDeleteDialogIsOpen(false);
    }
    const [deleteDialogIsOpen, setDeleteDialogIsOpen] = useState(false);


    const dialogForEditing = <Dialog closeDialog={closeDialog} title="Edit movie" 
    children={<MovieForm movie={props.movie} onSubmit={submitDialog}/>} dialogIsOpen={dialogIsOpen}></Dialog>;

    const dialogForDeleting = <Dialog closeDialog={closeDeleteDialog} title="Delete movie" 
    children={<DeleteForm onSubmit={() => {props.deleteMovie(props.movie);closeDeleteDialog();}}/>} dialogIsOpen={deleteDialogIsOpen}></Dialog>;

    const portalForEditing = ReactDOM.createPortal( dialogForEditing, document.body);
    const portalForDeleting = ReactDOM.createPortal( dialogForDeleting, document.body);

    let dropdownContent = showDropdown ? <DropDown closeDropdown={setShowDropdown} editMove={props.editMove} 
    movie={props.movie} openDialog={openDialog} openDeleteDialog={openDeleteDialog}/> : ""

return (
    <>
    {portalForDeleting}
    {portalForEditing}
    <div className="movie-tile" data-testid="movieTile" onClick={() => props.setSelectedMovieId(props.movie.id)}> 
        <div className="context-icon" onClick={(event) => {event.stopPropagation();setShowDropdown(!showDropdown);}}></div>
        {dropdownContent}
        <img className="poster" src={props.movie.poster_path} alt=""
        onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src="https://www.popcorn.app/assets/app/images/placeholder-movieimage.png";
          }}/>
        <div className="title-row">
            <div className="title">{props.movie.title}</div>
            <div className="release-year">{new Date(props.movie.release_date).getFullYear()}</div>
        </div>
        <div className="genres">{props.movie.genres.join(', ')}</div>
    </div>
    </>
  )
}
