import React from "react";
import { Link, Links } from "react-router-dom";
function Header() {
  return
  {
    <>
      <head>
        <div>
          <header
            style={{
              display: "flex",
              justifyContent: "space-between",
              border: "solid 1px black",
            }}
          >
            <img
              height={50}
              width={50}
              style={
                ((borderRadius = "50%"),
                (display = "flex"),
                (alignItems = "center"))
              }
              src="https://res.cloudinary.com/dhdepk5ib/image/upload/v1757696461/samples/ecommerce/leather-bag-gray.jpg"
            ></img>
            <b>My Mart</b>
          </header>
          <nav style={{ display: "flex", gap: "20px" }}>
           <Link to={"/"}> <a href="">Home</a></Link>
            <Link to={"/about"}><a href="">About</a></Link>
            <Link to ={"/register"}><a href="">Register</a></Link>
            <Links to={"/products"}><a href="">Products</a></Links>
           <Link to={"/login"}> <a href="">Login</a></Link>
          </nav>
        </div>
      </head>
    </>;
  }
}
export default Header;
