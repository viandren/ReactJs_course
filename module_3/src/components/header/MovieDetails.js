import './MovieDetails.css';

import React from "react";

export default function MovieDetails(props) {

    const m = props.movie;

return (
    <div className="movie-details" data-testid="movieDetails">
        <img className="details-poster" src={"/movie-posters/" + m.imageUrl} alt="" />
        <div className="details-box">
            <div className="details-title-row">
                <div className="details-title">{m.title}</div>
                <div className="details-rating">{m.rating}</div>
            </div>
            <div className="details-genres">{m.genres}</div>
            <div className="duration-row">
                <div className="details-release-year">{m.releaseYear}</div>
                <div className="details-duration">{m.duration}</div>
            </div>
            <div className="details-description">{m.description}</div>
        </div>
    </div>
  )
}

