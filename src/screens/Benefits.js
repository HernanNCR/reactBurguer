import React from 'react'
import styles from "./Benefits.module.css"

import { CiBurger } from "react-icons/ci";
 

 const Benefits = () => {
  return (
    <div name="Conócenos" className={styles.Benefits}>
      <h2 className={styles.BenefitsTitle}>NO FAST FOOD BUT GOOD FOOD FAST</h2>
      <p>
        Hacemos nuestros propios ingredientes <CiBurger />
      </p>
      <p>
        Nuevos sabores para ti  <CiBurger />
      </p>
      <p>
        Costos mucho mas bajos  <CiBurger />
      </p>
      <p>
        Nuestra especialidad es cocinar para ti  <CiBurger />
      </p>
      <p>
        Gran estancia  <CiBurger />
      </p>
      <p> 
        Tiempo espera  <CiBurger />
      </p>
      <p>
        Somos tu viernes en la noche  <CiBurger />
      </p>
    </div>
  )
} 

export default Benefits