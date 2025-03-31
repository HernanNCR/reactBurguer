import React from "react";
import styles from "./home.module.css";

const home = () => {
  return (
    <div name="Home" className={styles.home}>
      <div className={styles.homeContainer} >
        <div className={styles.titleContainer}>
          <p style={{fontSize:"6rem"}}>
            GOOD TIMES 
          </p>
          <p className={styles.with}>with</p> 
            <p style={{fontSize:"7rem", position:"relative",top:"-10px",left:"70px"}}><b>GREAT Friends</b></p>
          
        </div>
        
        
      </div>
      <div className={styles.divImg}>
        <img className={styles.img1} src={require("../assets/burguer5.avif")} />
        <img className={styles.img} src={require("../assets/burguer2.jpg")} />
      </div>
      
    </div>
  );
};

export default home;
