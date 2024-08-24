import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import debounce from "lodash.debounce";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.802061&lng=83.383617&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestaurant(restaurants);
    setFilteredRestaurant(restaurants);
  };

  const filterTopRestaurants = () => {
    const filtered = listOfRestaurant.filter(x => x.info.avgRating > 4);
    setFilteredRestaurant(filtered);
  };

  const handleSearch = useCallback(
    debounce((text) => {
      const filtered = listOfRestaurant.filter(x => x.info.name.toLowerCase().includes(text.toLowerCase()));
      setFilteredRestaurant(filtered);
    }, 300),
    [listOfRestaurant]
  );

  useEffect(() => {
    handleSearch(searchText);
  }, [searchText, handleSearch]);

  if (!listOfRestaurant || listOfRestaurant.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div>
        <div className="place-content-between m-4 p-4 flex bg-yellow-100 shadow-lg">
          <div>
            <button className="font-bold text-black border bg-white m-2 p-2" onClick={filterTopRestaurants}>
              Top Restaurants
            </button>
          </div>
          <div>
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search for restaurants..."
            />
            <button className="bg-black text-white font-bold p-2 m-2 cursor-pointer" onClick={() => handleSearch(searchText)}>
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap place-content-center">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={`/restaurantmenu/${restaurant.info.id}`}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
