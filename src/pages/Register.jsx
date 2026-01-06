import React from "react";
import { useState } from "react";

function Register() {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  //functions which handles my details
  let Submitdetails = async (e) => {
    e.preventDefault();
    // send the details to the backend
    let data = { username, email, password };
    let result = await fetch(
      "https://ecommerece-with-backend1.onrender.com/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    let finalresult = await result.json();
    alert(`${finalresult.msg}`);
  };

  return (
    <>
      <h1>REGISTRATION FROM</h1>
      <form onSubmit={Submitdetails}>
        <div>
          <label>Username</label>
          <br />
          <input
            type="text"
            onChange={(e) => {
              setusername(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>Email</label>
          <br />
          <input
            type="text"
            onChange={(e) => {
              setemail(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>password</label>
          <br />
          <input
            type="text"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          ></input>
        </div>
        <button>"Submit"</button>
      </form>
    </>
  );
}

export default Register;
