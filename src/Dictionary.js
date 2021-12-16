import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function keywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <h1>What word are you looking up?</h1>
        <form onSubmit={search}>
          <input
            type="search"
            onChange={keywordChange}
            defaultValue={keyword}
            autoFocus="on"
          />
        </form>
        <div className="hint">Suggested words: moon, night, book etc...</div>
      </section>
      <Results results={results} />
    </div>
  );
}
