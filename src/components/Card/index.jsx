import { React, useState } from 'react';
import styles from './card.module.css';

function Card({ title, body, id }) {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className={styles.container}>
      <h1
        className={styles.title}
        onClick={() => setIsActive(!isActive)}
        id={id}
      >
        {title}
      </h1>
      {isActive && (
        <p id={`body${id}`} className={styles.cardBody}>
          {body}
        </p>
      )}
    </div>
  );
}

export default Card;
