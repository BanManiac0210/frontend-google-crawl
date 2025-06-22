import { useState } from "react";
import searchIcon from "../../asset/search-icon.svg";
import "./SearchBar.css";
import { useNavigate } from "react-router-dom";

function SearchBar({ initialValue = "" }) {
  const [query, setQuery] = useState(initialValue);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim().length == 0) {
      alert("Dont leave the search bar empty!");
    }

    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        className="search-bar__input"
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <img className="search-bar__icon" src={searchIcon} alt="Search" onClick={handleSubmit} />
    </form>
  );
}

export default SearchBar;
