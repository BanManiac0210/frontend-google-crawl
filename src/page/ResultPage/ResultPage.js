import SearchBar from "../../component/SearchBar/SearchBar";
import "./ResultPage.css";
import { dummyData } from "../../const/constant";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SearchItem from "../../component/SearchItem/SearchItem";
import { exportToCSV } from "../../service/exportToCSV";
import { exportToJson } from "../../service/exportToJSON";
import { querySearch } from "../../service/querySearch";
import LoadingSpinner from "../../component/LoadingSpinner/LoadingSpinner";

function ResultPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [searchQuery, setSearchQuery] = useState(queryParams.get("q") || "");
  const [results, setResults] = useState(dummyData.organic_results || []);

  useEffect(() => {
    const q = new URLSearchParams(location.search).get("q") || "";
    setSearchQuery(q);
  }, [location.search]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setResults([]); 
        const data = await querySearch.search(searchQuery);
        setResults(data.result.organic_results || []);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchData();
  }, [searchQuery]);  

  return (
    <div className="result-page">
      <div className="result-page__header">
        <div className="result-page__logo" onClick={() => navigate("/")}>
          <span style={{ color: "#EA4335" }}>
            <b>R</b>
          </span>
          <span style={{ color: "#FBBC05" }}>
            <b>e</b>
          </span>
          <span style={{ color: "#FBBC05" }}>
            <b>s</b>
          </span>
          <span style={{ color: "#34A853" }}>
            <b>u</b>
          </span>
          <span style={{ color: "#34A853" }}>
            <b>l</b>
          </span>
          <span style={{ color: "#4285F4" }}>
            <b>t</b>
          </span>
          <span style={{ color: "#4285F4" }}>
            <b>s</b>
          </span>
        </div>

        <SearchBar initialValue={searchQuery} />

        <button className="result-page__download-as-json-button" onClick={() => exportToJson(results)}>
          <b>Download as JSON</b>
        </button>
        <button className="result-page__download-as-csv-button" onClick={() => exportToCSV(results)}>
          <b>Download as CSV</b>
        </button>
      </div>

      <div className="result-page__content">
        <span className="result-page__content__title">
          <b>Search results for</b> <i>“{searchQuery}” :</i>
        </span> 
        <div className="result-page__content__loading-spinner">
          {results.length === 0 && <LoadingSpinner />}
        </div>
        <div className="result-page__content__result-item">
          {results.map((result, index) => (
            <SearchItem 
              key={index}
              position={result.position}
              title={result.title}
              snippet={result.snippet}
              link={result.link}
              redirect_link={result.redirect_link}
              displayed_link={result.displayed_link}
              thumbnail={result.thumbnail}
              favicon={result.favicon}
              source={result.source}
            />
            ))}  
        </div>
      </div>
    </div>
  );
}

export default ResultPage;