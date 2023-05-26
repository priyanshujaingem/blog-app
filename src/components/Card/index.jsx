import React from 'react';
import styles from './card.module.css';

function Card({ title, body, id }) {
  const handleAccordian = (event) => {
    // for (let i = 0; i < accordionItems.length; i++) {
    //   if (accordionItems[i] != item) {
    //     accordionItems[i].classList.remove('active');
    //   } else {
    //     item.classList.toggle('active');
    //   }
    // }
    console.log(event.target.id);
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title} onClick={handleAccordian} id={id}>
        {title}
      </h1>
      <p className={styles.cardBody}>{body}</p>
    </div>
  );
}

export default Card;
