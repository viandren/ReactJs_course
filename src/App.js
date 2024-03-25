
import './App.css';
import Header from './components/header/Header.js';
import Main from './components/main/Main.js';

import React from "react";
import { useState } from "react";

import { QueryClient, QueryClientProvider } from 'react-query';

function App() {

  const queryClient = new QueryClient();

  const [selectedMovieId, setSelectedMovieIdState] = useState(undefined);

  const setSelectedMovieId = movieId =>  {
    setSelectedMovieIdState(movieId);
    window.scrollTo(0, 0);
  }

  const [searchByTitle, setSearchByTitle] = useState('');
  /*

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
*/

  return <QueryClientProvider client={queryClient}>
      <div className="app" id="app">
          <Header 
          selectedMovieId={selectedMovieId}
          setSelectedMovieId={setSelectedMovieId}
          setSearchByTitle={setSearchByTitle}
          /*
          addMovie={addMovie}*//>
          <Main 
          setSelectedMovieId={setSelectedMovieId}
          searchByTitle={searchByTitle}
          /*
          editMovie={editMovie}
          deleteMovie={deleteMovie}*//>
      </div>
    </QueryClientProvider>
}


export default App;
