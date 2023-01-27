import { restuarantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
function filterData(txt,res){
    const filterDat = res.filter((r)=>r.data.name.toLowerCase().includes(txt.toLowerCase()));
    return filterDat;
    }
const Body = ()=>{ 
    const [someVal, setsomeVal] = useState(""); 
  const [filteredrestaurantData, setFilteredRestaurantData] = useState([]);
  const [allrestaurantData, setAllRestaurantData] = useState([]);
  const [errorMsg, seterrorMsg]= useState("");
  //initailly when page renders for first time/refresh its loaded with restuarantlist data , later after api call and re render happens then it updates data 
    useEffect(()=>{getResData();
      console.log("CALL THIS WHENEVR (RESTUARANTDATA) DEPENDENCY CHANGES");
    },[]);
    async function getResData() {
      try{
      const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&page_type=DESKTOP_WEB_LISTING");
      const redata = await data.json();
      //optional chaining
      setFilteredRestaurantData(redata?.data?.cards[2]?.data?.data?.cards);
      setAllRestaurantData(redata?.data?.cards[2]?.data?.data?.cards);
    // console.log(redata);
      }catch (error) {
        console.log(error);
      }
  }
   console.log("RENDER");

   const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const data = filterData(searchText, restaurants);
      setFilteredRestaurantData(data);
      seterrorMsg("");
      if (data.length === 0) {
        seterrorMsg("No matching restaurant found");
      }
    } else {
      seterrorMsg("");
      setFilteredRestaurantData(restaurants);
    }
  };

  if(!allrestaurantData) return null;
//   if( filteredrestaurantData.length===0 && allrestaurantData.length !==0) return <h1>No restaurants match your filter!!! Try Again</h1>
  // if( filteredrestaurantData.length===0) return <h1>No restaurants match your filter!!! Try Again</h1>
  // if(errorMsg) return <div className="error-container">{errorMsg}</div>
  return allrestaurantData?.length === 0 ? <Shimmer/> : (
      // return restaurantData.length === 0 && someVal.length === 0 ? <Shimmer/> : (
        <>
      <div className='search'>
        <input type="text" placeholder="Search" value={someVal} onChange={(e)=>
          {setsomeVal(e.target.value);}
        }/>
      <button onClick={()=>{
         searchData(someVal, allrestaurantData);
      }}>Submit</button>
  
      </div>
          <div className='restuarant-list'>
            {(filteredrestaurantData.length === 0 || errorMsg )? <h1>{errorMsg}, No restaurants match your filter!!! Try Again</h1> :
          (
          filteredrestaurantData.map(x => {return (
          <Link to={"/restaurant/"+x.data.id}  key={x.data.id}> 
           <RestaurantCard {...x.data}/>
          </Link>
          );}))}
          </div>
          </>
      );
      }
      export default Body;