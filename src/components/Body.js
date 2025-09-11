import { useState } from "react";
import { resList } from "../utils/mockData";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  // Original list (always remains as is)
  const [allRestaurants] = useState(resList);

  // This will store filtered search results
  const [searchResults, setSearchResults] = useState([]);

  const [filtered, setFiltered] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  // Handle filter button (Rating 4+)
  const handleFilterClick = () => {
    if (filtered) {
      setSearchResults([]); // reset filter when toggled off
      setFiltered(false);
    } else {
      const topRated = allRestaurants.filter((res) => res.info.avgRating > 4);
      setSearchResults(topRated);
      setFiltered(true);
    }
  };

  // Handle search
  const handleSearch = () => {
    if (!showSearch) {
      setShowSearch(true);
      return;
    }

    const results = allRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // ✅ Only update search results if there is a match
    if (results.length > 0) {
      setSearchResults(results);
    } else {
      // ❌ If no match, reset to empty so main list stays visible
      setSearchResults([]);
    }

    setFiltered(false);
  };

  // Decide what to render:
  // - If searchResults has data, show that
  // - Otherwise, always show the original allRestaurants
  const restaurantsToDisplay =
    searchResults.length > 0 ? searchResults : allRestaurants;

  return (
    <div className="body">
      <div className="filter-container">
        {showSearch && (
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        )}
        <button className="filter-btn" onClick={handleSearch}>
          Search
        </button>
        <button className="filter-btn" onClick={handleFilterClick}>
          {filtered ? "Show All" : "Rating 4+"}
        </button>
      </div>

      <div className="res-container">
        {restaurantsToDisplay.length === 0 ? (
          <Shimmer />
        ) : (
          restaurantsToDisplay.map((res, idx) => (
            <ResturantCard key={idx} resData={res} />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
