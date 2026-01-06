import React from "react";

function About() {
  
  

  return (
    <div style={styles.container}>
      <h1>About Us</h1>
      <p>
        Welcome to our website! We are passionate about creating amazing web
        experiences. Our team is dedicated to building fast, user-friendly,
        and responsive applications.
      </p>
      <p>
        Our mission is to deliver high-quality solutions to our clients and
        users with focus on innovation and excellence.
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#333",
  },
};




export default About;
