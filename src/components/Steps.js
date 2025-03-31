import React from "react";
import styles from "./step.module.css"; 
import { CiBurger } from "react-icons/ci";

const Steps = ({ text }) => {
  return (
    <div className={styles.container}>
      <div className={styles.stepContainer}>
        <CiBurger />
        <p className={styles.text}>{text}</p>
      </div>
      
    </div>
  );
};
export default Steps;
