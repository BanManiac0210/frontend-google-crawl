import "./SearchPage.css";
import SearchBar from "../../component/SearchBar/SearchBar";

function SearchPage() {
  return (
    <div className="search-page">
      <div className="search-page__header">
        <span style={{ color: "#EA4335"}}>
          <b>Google</b>
        </span>
        <span style={{ color: "#FBBC05"}}>
          <b>Crawl</b>
        </span>
        <span style={{ color: "#34A853"}}>
          <b>Engine</b>
        </span>
        <span style={{ color: "#4285F4"}}>
          <b>Search</b> 
        </span>
      </div>
      <SearchBar />
      <span className="search-page__description">
        Made by <b>Ban Bui</b>
      </span>
    </div>
  );
}

export default SearchPage;