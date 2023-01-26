import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL,FETCH_MENU_URL } from "../constants";

const RestaurantMenu = () => {
    // const idval = useParams();
    // const {id} = idval;
    const {id} = useParams();
    // const [restaurant, SetRestaurant] = useState({});
    const [restaurant, SetRestaurant] = useState(null);
    useEffect(()=>{getRestaurantInfo();},[]);
    async function getRestaurantInfo(){
        const res = await fetch(FETCH_MENU_URL +id);
        const resdata = await res.json();
        console.log(resdata.data);
        SetRestaurant(resdata.data);
    }
    console.log(id);
    return !restaurant ? (
            <Shimmer />
          ) :
    (
            <div className="menu">
                <div>
       <h1>Restraunt id: {id}</h1>
      <h2>{restaurant?.name}</h2>
       <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
       <h3>{restaurant?.area}</h3>
       <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating} stars</h3>
        <h3>{restaurant?.costForTwoMsg}</h3>
     </div>
     <div>
       <h1>Menu</h1>
       <ul>
         {Object.values(restaurant?.menu?.items).map((item) => (
           <li key={item.id}>{item.name}</li>
         ))}
      </ul>
     </div>
        </div>
    );
}
export default RestaurantMenu;