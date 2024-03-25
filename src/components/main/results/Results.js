import './Results.css';

import React from "react";
import MovieTile from './MovieTile';

import { useQuery } from 'react-query';
import axios from 'axios';

export default function Results(props) {
  const fetchData = async () => {
    const sortByField = props.sortBy === 'Title' ? 'title' : 'release_date';
    let queryString = 'sortBy=' + sortByField + '&sortOrder=asc&limit=100';
    if (props.filterByGenre !== 'all') {
        queryString += '&filter=' + props.filterByGenre;
    }
    if (props.searchByTitle !== '') {
        queryString += '&searchBy=title&search=' + props.searchByTitle;
    }
    console.log('query: ' + queryString)
    const response = await axios.get('http://localhost:4000/movies?' + queryString);
    if (response.status !== 200) {
      console.log('Error: Network response was not ok');
    }
    return response.data;
    
  }

  const {  isLoading, isError, data } = useQuery(['data', props.sortBy, props.filterByGenre, props.searchByTitle], fetchData);

  
  if (isLoading) return "Loading...";
  if (isError) return "An error has occurred.";
  

  if (data !== undefined) {
    return (
        <div className="results" data-testid="results">
        {data.data.map(function(movie, i){
        return  <MovieTile movie={data.data[i]} setSelectedMovieId={props.setSelectedMovieId} key={i} 
        editMovie={props.editMovie} deleteMovie={props.deleteMovie}/>;})
        }
        </div>
    )
    } else {
        return <div>Api connection error</div>;
    }
}

