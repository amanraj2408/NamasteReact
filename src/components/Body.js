import { useState } from "react";
import { resList } from "../utils/mockData";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

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

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-xl font-semibold text-red-600">Oops — you are offline</h1>
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
        {showSearch && (
          <input
            className="w-full sm:w-72 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        )}

        <div className="flex gap-2">
          <button
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            onClick={handleSearch}
          >
            Search
          </button>
          <button
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
            onClick={handleFilterClick}
          >
            {filtered ? "Show All" : "Rating 4+"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
