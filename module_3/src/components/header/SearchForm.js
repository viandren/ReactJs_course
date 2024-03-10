import './SearchForm.css';

import React from "react";
import { useState } from "react";


export default function SearchForm(props) {

  const [query, setQuery] = useState(props.initialQuery);
  const [result, setResult] = useState("");

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setResult(props.onSearch(query));
  };

return (
    <div className="search-form" data-testid="searchForm">
      <form data-testid="form" onSubmit={handleSubmit}>
        <input placeholder="What do you want to watch?" onChange={handleChange} name="searchInput" className="search-input"/>
        <button onClick={handleSubmit} type="submit" className="search-button">
          Search
        </button>
      </form>
      <h5 className="search-result">{result}</h5>
    </div>
  )
}

