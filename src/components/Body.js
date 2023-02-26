import { useState,useEffect } from "react";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import DetailCart from "./DetailCart";
import { json, Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
       searchText.toLowerCase().includes(restaurant?.data?.data?.name.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const k=useParams();
  
   const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filtereRestaurant, setFiltereRestaurant] = useState([]);

  useEffect(()=>{
    fetchingData()
    
   },[])
   console.log(k)
 async function fetchingData(){
  const feth=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING")  
  const json = await feth.json();
 setRestaurants(json?.data?.cards)
 setFiltereRestaurant(json?.data?.cards)
}

   



  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, filtereRestaurant);
            // update the state - restaurants
            setRestaurants(data);
           
          }}
        >
          {" "}
          Search
        </button>
      </div>
   
      <div className="restaurant-list">
        {(restaurants.length===0)? <Shimmer/>:restaurants.map((restaurant) => {
          return (
               <Link to={"/detailcart/"+restaurant?.data?.data?.id} key={restaurant.data.data.id}> <RestaurantCard {...restaurant.data.data}  /></Link> 
          );
        })}
        
      </div>
    </>
  );

};


export default Body;










// import { useState } from "react";
// import { restaurantList } from "../contants";
// import RestaurantCard from "./RestaurantCard";
// const Body = () => {
//   const items = restaurantList.map((x) => (
//     <RestaurantCard
//       name={x.data.name}
//       cuisines={x.data.cuisines}
//       cloudinaryImageId={x.data.cloudinaryImageId}
//       lastMileTravelString={x.lastMileTravelString}
//       key={x.data.id}
//     />
//   ));

//   const [input, setInput] = useState("");
//   const [noFilterData, setFilterData] = useState(items);
//   const onChange = (e) => {
//     setInput(e.target.value);
//   };
//   const onClick = () => {
//     console.log(items);
//     const filterData = items.filter((restaurant) =>
    
//         restaurant.props.name.toLowerCase().includes(input.toLowerCase()) ||
//           restaurant.props.cuisines
//             .join(" ")
//             .toLowerCase()
//             .includes(input.toLowerCase())
       
//     );
//     setFilterData(filterData);
//   };
//   return (
//     <>
//       <input type="text" value={input} onChange={onChange} />
//       <button onClick={onClick}>submit</button>
//       <div className="restaurant-list">{noFilterData}</div>
//     </>
//   );
// };
// export default Body;
