import React from "react";
import styles from "./howWeWork.module.css";
import Steps from "../components/Steps";

const howWeWork = () => {
  const informaciones = [
    {
      text: "PICHON",
      id: 1,
    },
    {
      text: "TOAD", 
      id: 2,
    },
    {
      text: "AY PAPANTLA",
      id: 3,
    },
    {
      text: "K-SABROSA",
      id: 4,
    },
    {
      text: "HONNO-LULU",
      id: 5,
    },
    {
      text: "DOBLE M",
      id: 1,
    },
    {
      text: "BOB CONSTRUCTOR", 
      id: 2,
    },
    {
      text: "SR PICHON",
      id: 3,
    },
  ];
  return (
    <div name="Productos" className={styles.howwework}>
      <div className={styles.menu}>
        <h2>MENU</h2>
        <br/>
        <h4 style={{paddingLeft:"40px"}}>---BURGUERS & <br/> HOTDOGS</h4>
      </div>
      <div className={styles.how1}>
        
        {informaciones.map((x) => (
          <Steps key={x.id} text={x.text} id={x.id} />
        ))}
        
      </div>
      
      
    </div>
  );
};

export default howWeWork;
