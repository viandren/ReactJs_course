
import './App.css';
import Counter from "./components/Counter.js";
import SearchForm from './components/SearchForm.js';
import GenreSelect from './components/GenreSelect.js';

function App() {
  var searchFormProps = {};
  searchFormProps.initialQuery = "horror";
  searchFormProps.onSearch = (query) => {console.log("search initiated with query: " + query)}

  var genreSelectProps = {};
  genreSelectProps.genreList = ["horror","comedy","fantasy","docu"];
  genreSelectProps.selected = "fantasy";
  genreSelectProps.onSelect = (genre) => {console.log("genre selected: " + genre)}
  return <>
          <Counter /> 
          <SearchForm { ...searchFormProps} />
          <GenreSelect { ...genreSelectProps} />
        </>;
}



export default App;
