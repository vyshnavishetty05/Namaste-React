 import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Title = ()=>(
  <div className='cardss'>
  
      <a href="/">
          <img className="logo" alt="logo" src="https://png.pngtree.com/png-clipart/20200720/original/pngtree-fresh-food-logo-png-image_4774188.jpg"/></a>
          </div>
  );

const Header = ()=>{
    const [isLoggedIn, setIsLoggedIn]=useState(false);
    console.log("render");
    useEffect(()=>{console.log("useeffect called only once i.e., after initial render and not again despite of any state change");},[]);
  return(
      <div className='header'>
          <Title/>
          <div className='nav-items'>
              <ul>
                  <Link to="/">
                  <li>Home</li>
                  </Link>
                  <Link to="/about">
                  <li>About</li>
                  </Link>
                  <Link to="/contact">
                  <li>Contact</li>
                  </Link>
                  <li>Cart</li>
              </ul>
          </div>
          {isLoggedIn ? <button onClick={()=>setIsLoggedIn(false)}>Logout</button>: <button onClick={()=>setIsLoggedIn(true)}>Login</button>}
      </div>
  );
  }
  export default Header;