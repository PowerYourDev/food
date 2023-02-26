import { useState } from "react";
import { restaurantList } from "../contants";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
  const items = restaurantList.map((x) => (
    <RestaurantCard
      name={x.data.name}
      cuisines={x.data.cuisines}
      cloudinaryImageId={x.data.cloudinaryImageId}
      lastMileTravelString={x.lastMileTravelString}
      key={x.data.id}
    />
  ));

  const [input, setInput] = useState("");
  const [noFilterData, setFilterData] = useState(items);
  const onChange = (e) => {
    setInput(e.target.value);
  };
  const onClick = () => {
    console.log(items);
    const filterData = items.filter((restaurant) =>
    
        restaurant.props.name.toLowerCase().includes(input.toLowerCase()) ||
          restaurant.props.cuisines
            .join(" ")
            .toLowerCase()
            .includes(input.toLowerCase())
       
    );
    setFilterData(filterData);
  };
  return (
    <>
      <input type="text" value={input} onChange={onChange} />
      <button onClick={onClick}>submit</button>
      <div className="restaurant-list">{noFilterData}</div>
    </>
  );
};
export default Body;


// import { useState } from "react";
// import { restaurantList } from "../contants";
// import RestaurantCard from "./RestaurantCard";

// function filterData(searchText, restaurants) {
//   const filterData = restaurants.filter((restaurant) =>
//     searchText
//       ? restaurant.data.name.toLowerCase().includes(searchText.toLowerCase()) ||
//         restaurant.data.cuisines
//           .join(" ")
//           .toLowerCase()
//           .includes(searchText.toLowerCase())
//       : console.log("not found")
//   );
//   return filterData;
// }

// const Praticse = () => {
//   const [restaurants, setRestaurants] = useState(restaurantList);
//   const [searchText, setSearchText] = useState("");

//   return (
//     <>
//       <div className="search-container">
//         <input
//           type="text"
//           className="search-input"
//           placeholder="Search"
//           value={searchText}
//           onChange={(e) => {
//             setSearchText(e.target.value);
//           }}
//         />
//         <button
//           className="search-btn"
//           onClick={() => {
//             //need to filter the data
//             const data = filterData(searchText, restaurants);
//             // update the state - restaurants
//             setRestaurants(data);
//           }}
//         >
//           {" "}
//           Search
//         </button>
//       </div>
//       <div className="restaurant-list">
//         {restaurants.map((restaurant) => {
//           return (
//             <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default Praticse;
