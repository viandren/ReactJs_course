
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
        <input value={query} onChange={handleChange} name="searchInput"/>
        <button onClick={handleSubmit} type="submit">
          Search
        </button>
      </form>
      <h5>{result}</h5>
    </div>
  )
}

