import React, { useState } from "react";
import "../css/SearchBar.css";

function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");

  const onChange = async (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(null);
    }
  };

  const onClick = () => {
    onSearch(search.toLowerCase());
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSearch(search.toLowerCase());
    }
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input
          placeholder="Name or Id of any Pokemon"
          onChange={onChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="searchbar-btn">
        <button onClick={onClick}>
          <span className="material-symbols-outlined">search</span>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
