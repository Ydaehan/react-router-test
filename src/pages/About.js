import React from 'react';
import styles from './About.module.css';

export default function About() {
  return (<div className='container mt-5'>
    <h3>About Page!</h3>
    <p><input type="text" className={styles.inputBox} name='name' placeholder='test' autoComplete='off'/></p>
  </div>);
}