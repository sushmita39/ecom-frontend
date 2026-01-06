import React from "react";

function Header() {
  return;
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
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Register</a>
            <a href="">Products</a>
            <a href="">Login</a>
          </nav>
        </div>
      </head>
    </>;
  }
}
export default Header;
