
import './App.css';
import Header from './components/header/Header.js';
import Main from './components/main/Main.js';

import React from "react";
import { useState, useEffect } from "react";

import jsonData from './data/TestData.json';

function App() {

  
  const [movieList, setMovieList] = useState([...jsonData]);
  
  const [selectedMovie, setSelectedMovie] = useState(undefined);

  const handleSelection = movieId =>  {
    setSelectedMovie(movies.filter(m => m.id === movieId).at(0));

    window.scrollTo(0, 0);
  }

  const [sortBy, setSortByState] = useState("");
  const setSortBy = text => {
    setSortByState(text);
  }
  useEffect(() => {
    setMovies(sortMovies(movies));
  },[sortBy]);

  const [movies, setMovies] = useState(movieList.sort((a, b) => {return a.releaseYear-b.releaseYear}));

  const filterByGenre = async (filterBy) => {
    setMovies(sortMovies(movieList.filter(m => {return filterBy === "" 
                    || filterBy === "all" || m.genres.join('-').toLowerCase().indexOf(filterBy) > -1})));
    
  }

  const sortMovies = movies => {
    const deepCopyObj = JSON.parse(JSON.stringify(movies));
    if (sortBy.toLowerCase() === "title") {
      return deepCopyObj.sort(
        function(a, b) {
          return a.title.localeCompare(b.title);
        });
    } else {
      return deepCopyObj.sort((a, b) => {return a.releaseYear-b.releaseYear});
    }
  }

  const filterByText = (text) => {
    setMovies(sortMovies(movieList.filter(m => {return text === "" || text === "all" 
    || m.title.toLowerCase().indexOf(text) > -1
    || m.genres.join('-').toLowerCase().indexOf(text) > -1})));
  }

  const addMovie = (movie) => {
    console.log(movie);
    let tempList = JSON.parse(JSON.stringify(movieList));
    tempList.push(movie);
    setMovieList(tempList);
    setMovies(sortMovies(tempList));
  }

  const editMovie = (movie) => {
    let tempList = JSON.parse(JSON.stringify(movieList.filter(m => m.id != movie.id)));
    tempList.push(movie);
    setMovieList(tempList);
    setMovies(sortMovies(tempList));
  }

  const deleteMovie = (movie) => {
    let tempList = JSON.parse(JSON.stringify(movieList.filter(m => m.id != movie.id)));
    setMovieList(tempList);
    setMovies(sortMovies(tempList));
  }


  return <div className="app" id="app">
          <Header movie={selectedMovie} 
          handleSelection={handleSelection}
          movies={movies}
          filterByText={filterByText}
          addMovie={addMovie}/>
          <Main handleSelection={handleSelection}
          movies={movies}
          filterByGenre={filterByGenre}
          setSortBy={setSortBy}
          editMovie={editMovie}
          deleteMovie={deleteMovie}/>
</div>
}




export default App;
