import React, { useEffect, useState } from 'react';
import ReactDOM from'react-dom/client';
import Shimmer from './components/Shimmer';
import { createBrowserRouter, Link, Outlet, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import RestrauntMenu from './components/RestrauntMenu';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
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
const RestaurantCard = (props)=>{
    console.log(props);
    return (
        <div className='card'>
            <img alt="img" src={kfc.image+props.res.data?.cloudinaryImageId}/>
            <h4>{props.res.data?.name}</h4>
            <h3>{props.res.data?.cuisines.join(", ")}</h3>
            <h3>{props.res.data?.lastMileTravel+ " minutes"}</h3>
        </div>
    );
};
const userLoggedIn = () => {
  return false;
}
const kfc = {
    name: 'kfc',
    image:'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/',
    cuisines: ['kfc','american'],
    rating: 4.3
}
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

const AppComponent = () => {
    return(
        <React.Fragment>
        <Header/>
        <Outlet/>
        <Footer/>
        </React.Fragment>
    );
};
const appRouter = createBrowserRouter([{
  path:"/",
  element:<AppComponent />,
  errorElement: <Error />,
  children: [
    {
      path: "/",
      element: <Body />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/contact",
      element: <Contact />
    },{
      path: "/restaurant/:id",
      element: <RestaurantMenu />
    }
  ]
}]);
const rooting = document.getElementById("root");
const root=ReactDOM.createRoot(rooting); 
root.render(<RouterProvider router={appRouter}/>);