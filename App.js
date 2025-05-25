import React from "react";
import ReactDOM from "react-dom/client";




/**
 *Header
    *  - Title  
    *  - Logo
    *  - Nav Items
    *  - Search
    * - Cart
* * body
*footer   
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFMI7k59GGI3XM8oAPiEfacyntnmaOGRtDAQ&s"
          alt="logo"
        />
      </div>

      <ul className="nav-items">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};
const ResturantCard = () => {
  return (
    <div className="res-card">
      <h3>Restaurant Name</h3>
      <h3>Restaurant Cuisine</h3>
      <h4>Restaurant Rating</h4>
    </div>
  );
};
const Body = () =>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <ResturantCard/>
            </div>
            
        </div>
    )
}

const AppLayout = () => {
    return(
    <div className="app">
        <Header/>
        <Body/>
    </div>
        
    
       
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>); // render the function component