
import './App.css';
import Counter from "./components/Counter.js";
import SearchForm from './components/SearchForm.js';
import GenreSelect from './components/GenreSelect.js';

function App() {
  const searchFormProps = {};
  searchFormProps.initialQuery = "horror";
  searchFormProps.onSearch = (query) => {console.log("search initiated with query: " + query);
                                          return "Results for " + query + " will be displayed here."}

  return <>
          <p>React test app</p>
          <Counter /> 
          <SearchForm { ...searchFormProps} />
          <GenreSelect 
            genreList={["horror","comedy","fantasy","docu","adventure"]}
            selected="fantasy"
            onSelect={(genre) => {console.log("genre selected: " + genre);}} />
        </>;
}



export default App;
