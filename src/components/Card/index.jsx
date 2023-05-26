import React from 'react';
import styles from './card.module.css';

function Card({ title, body, id }) {
  const handleAccordian = (event) => {
    let doc = document.getElementById(`body${event.target.id}`);
    if (doc.style.display === 'none') doc.style.display = 'block';
    else doc.style.display = 'none';
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title} onClick={handleAccordian} id={id}>
        {title}
      </h1>
      <p id={`body${id}`} className={styles.cardBody}>
        {body}
      </p>
    </div>
  );
}

export default Card;
