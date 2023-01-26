import React, { useState } from 'react';
import ReactDOM from'react-dom/client';
const Title = ()=>(
    <div className='cardss'>
    <a href="/">
        <img className="logo" alt="logo" src="https://png.pngtree.com/png-clipart/20200720/original/pngtree-fresh-food-logo-png-image_4774188.jpg"/></a>
        </div>
);
const Header = ()=>{
return(
    <div className='header'>
        <Title/>
        <div className='nav-items'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
);
}
const kfc = {
    name: 'kfc',
    image:'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/',
    cuisines: ['kfc','american'],
    rating: 4.3
}
const resList = [{
    type: "carousel",
    cards: [
        {
            name: 'kfc',
            cuisines: ['kfc','american'],
            rating: 4.3
        },{
            name: 'kfc',
            cuisines: ['kfc','american'],
            rating: 4.3
        }
    ]
},
{
    type: "restuarants",
    cards: [
        {
            name: 'kfc',
            cuisines: ['kfc','american'],
            rating: 4.3
        },{
            name: 'kfc',
            cuisines: ['kfc','american'],
            rating: 4.3
        }
    ]
}];
const RestaurantCards = ({res})=>{
  const {name, cuisines, cloudinaryImageId, lastMileTravelString}= res.data;
  return( 
  <div className='card'>
  <img alt="img" src={kfc.image+cloudinaryImageId}/>
  <h4>{name}</h4>
  <h3>{cuisines.join(", ")}</h3> 
  <h3>{lastMileTravelString+ " minutes"}</h3>
  </div>
);
};
const RestaurantCardss = ({name, cuisines, cloudinaryImageId, lastMileTravelString})=>{
  return(
    <div className='card'>
  <img alt="img" src={kfc.image+cloudinaryImageId}/>
  <h4>{name}</h4>
  <h3>{cuisines.join(", ")}</h3>
  <h3>{lastMileTravelString+ " minutes"}</h3>
  </div>
  );
}
const RestaurantCard = (props)=>{
    console.log(props);
    return (
        <div className='card'>
            {/* <img src={kfc.image+"wrlcwarzitxcdrtqv4ix"}/> */}
            {/* <img src="http://.."/> */}
            {/* <h3>KFC CHICKEN</h3> */}
            <img alt="img" src={kfc.image+props.res.data?.cloudinaryImageId}/>
            <h4>{props.res.data?.name}</h4>
            {/* <h3>{props.res.data?.name}</h3> */}
            {/* <h3>{restuarantList[0].data?.uuid}</h3> */}
            <h3>{props.res.data?.cuisines.join(", ")}</h3>
            {/* <h3>{kfc.cuisines.join(',')}</h3> */}
            {/* <h3>{kfc.rating}</h3> */}
            <h3>{props.res.data?.lastMileTravel+ " minutes"}</h3>
        </div>
    );
};
function filterData(txt,res){
const filterDat = res.filter((r)=>r.data.name.toLowerCase().includes(txt.toLowerCase()));
return filterDat;
}
    const Body = ()=>{
  // let someval = "Hello";
  const [someVal, setsomeVal] = useState(""); //returns [some variable, function to modify the variable]
  const [restaurantData, setRestaurantData] = useState(restuarantList);
  // destructuring in below way...
  // const xyz=useState();
  // const [xyz1,setXyz1] = xyz;
    return(
      <>
    <div className='search'>
      <input type="text" placeholder="Search" value={someVal} onChange={(e)=>
        //  someval=e.target.value , should not directly change/modify like this
        {setsomeVal(e.target.value);}
          //  console.log(e.target.value)
      }/>
    {/* <button onClick={() =>{ someVal === "true" ? setsomeVal("false"): setsomeVal("true");}}>Submit</button> */}
    <button onClick={() =>{ const data = filterData(someVal,restuarantList); setRestaurantData(data);}}>Submit</button>

    <h1>{someVal}</h1>

    </div>
        <div className='restuarant-list'>
        {/* <RestaurantCard res={restuarantList[0]}/>
        <RestaurantCard res={restuarantList[1]}/>
        <RestaurantCard res={restuarantList[2]}/>
        <RestaurantCard res={restuarantList[3]}/>
        <RestaurantCard res={restuarantList[4]}/>
        <RestaurantCard res={restuarantList[5]}/> */}
        {/* <RestaurantCards res={restuarantList[0]}/> */}
        {/* <RestaurantCardss {...restuarantList[5].data}/> */}
        {/* <RestaurantCard/> */}
        {/* unique key>> index as key >> no key (in map) */}
        {restaurantData.map(x => {return <RestaurantCardss {...x.data} key={x.data.id}/>})}
        </div>
        </>
    );
    }

const Footer = ()=>{
        return(
            <h1>Footer</h1>
        );
        }
const AppComponent = () => {
    return(
        <React.Fragment>
        <Header/>
        <Body/>
        <Footer/>
        </React.Fragment>
    );
};
const rooting = document.getElementById("root");
const root=ReactDOM.createRoot(rooting); 
root.render(<AppComponent />);