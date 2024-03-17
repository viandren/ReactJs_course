
import './App.css';
import Header from './components/header/Header.js';
import Main from './components/main/Main.js';

import React from "react";
import { useState, useEffect } from "react";

import jsonData from './data/TestData.json';

function App() {
  
  const [selectedMovie, setSelectedMovie] = useState(undefined);

  const handleSelection = movieId =>  {
    console.log(movieId);
    setSelectedMovie([...jsonData][movieId]);

    window.scrollTo(0, 0);
  }

  const [sortBy, setSortBySate] = useState("");
  const setSortBy = text => {
    setSortBySate(text);
  }
  useEffect(() => {
    setMovies(sortMovies(movies));
  },[sortBy]);

  const [movies, setMovies] = useState([...jsonData].sort((a, b) => {return a.releaseYear-b.releaseYear}));

  const filterByGenre = async (filterBy) => {
    setMovies(sortMovies([...jsonData].filter(m => {return filterBy === "" 
                    || filterBy === "all" || m.genres.toLowerCase().indexOf(filterBy) > -1})));
    
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
    setMovies(sortMovies([...jsonData].filter(m => {return text === "" || text === "all" 
    || m.title.toLowerCase().indexOf(text) > -1
    || m.genres.toLowerCase().indexOf(text) > -1})));
  }

  return <div className="app">
          <Header movie={selectedMovie} 
          handleSelection={handleSelection}
          movies={movies}
          filterByText={filterByText}/>
          <Main handleSelection={handleSelection}
          movies={movies}
          filterByGenre={filterByGenre}
          setSortBy={setSortBy}/>
</div>
}




export default App;
