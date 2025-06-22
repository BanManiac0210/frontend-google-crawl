import faviconDefault from "../../asset/favicon-default.svg"
import "./SearchItem.css";

function SearchItem({ 
  position, 
  title,
  link,
  redirect_link,
  displayed_link,
  thumbnail,
  favicon,
  snippet,
  source
}) {
  return (
    <div className="search-item">
      <div className="search-item__left">
        <div className="search-item__left__header">
          <img src={favicon? favicon : faviconDefault} className="content__favicon"/>
          <div className="header__source-link">
            <span className="header__source">
              <b>{source}</b>
            </span>
            <span className="header__link">{displayed_link}</span>
          </div>
        </div>
        <a href={link} className="search-item__left__title">
          <b>{title}</b>
        </a>
        <p className="search-item__left__snippet">{snippet}</p>
      </div>

      {thumbnail && <div className="search-item__right">
        <img src={thumbnail} alt={"Thumbnail for " + title} className="search-item__right__thumbnail" />
      </div>}
    </div>
  );
}

export default SearchItem;
