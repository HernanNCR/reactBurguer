import React from 'react'
import styles from './Contact.module.css'
 
 const Contact = () => {
  return (
    <div name="Contact" className={styles.Contact}>
      <h2>Contáctanos</h2>
      <form className={styles.form}>
        <label>Name</label>
        <input id='Name' name='Name' type='text' className={styles.input}></input>
        <label>Email</label>
        <input id='Email' name='Email' type='Email' className={styles.input}></input>
        <label>Message</label>
        <textarea id='Message' name='Message' className={styles.textarea}></textarea>
      
        <button type='submit'>ENVIAR</button>
      </form>
    </div>
  )
} 
export default Contact
