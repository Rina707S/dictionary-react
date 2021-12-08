import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function keywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={keywordChange} autoFocus="on" />
      </form>
    </div>
  );
}
