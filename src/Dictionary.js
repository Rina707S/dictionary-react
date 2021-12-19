import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleImages(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001e3c5333a4ae84eb39aa885e4f26f14d9";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=16`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handleImages);
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
      <Photos photos={photos} />
    </div>
  );
}
