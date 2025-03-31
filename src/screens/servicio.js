import React from "react";
import styles from "./service.module.css";

const Servicio = () => {
  return (
    <div name="Servicios" className={styles.services} >
      <div className={styles.carrousel}>
        <img src={require("../assets/burguer2.jpg")}/>
      </div>
      <div className={styles.title}>
        <p>SERVING TASTY BURGUERS SINCE 2019</p>
      </div>
    </div>
  );
};

export default Servicio; 
