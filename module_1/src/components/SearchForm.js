
import React from "react";
import { useState } from "react";


export default function SearchForm(props) {

  const [query, setQuery] = useState(props.initialQuery);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.onSearch(query)
  };

return (
    <div className="search-form">
      <form>
        <input value={query} onChange={handleChange}/>
        <button onClick={handleSubmit} type="submit">
          Search
        </button>
      </form>
    </div>
  )
}

