import React from "react";
import styles from "./app.module.css";

function App() {
  const mainPic = require("./assets/images/pic.jpg");
  const founder = require("./assets/images/founder.png");
  return (
    <div className={styles.card}>
      <img src={mainPic} alt="nft" />

      <h1>Equilibrium #3429</h1>
      <p>Our Equilibrium collection promotes balance calm</p>
      <div className={styles.main}>
        <div className={styles.article}>
          <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
              fill="#00FFF8"
            />
          </svg>
          <p className={styles.cyan}>0.041 ETH</p>
        </div>
        <div className={styles.article}>
          <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z"
              fill="#8BACD9"
            />
          </svg>
          <p>3 days left</p>
        </div>
      </div>
      <div className={styles.footer}>
        <img src={founder} alt="founder" />
        <p>
          Creation of <span>Jules Wyvern</span>{" "}
        </p>
      </div>
    </div>
  );
}

export default App;
