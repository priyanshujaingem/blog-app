import React from 'react';
import styles from './card.module.css';

function Card({ title, body }) {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
}

export default Card;
