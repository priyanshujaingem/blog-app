import React from 'react';
import styles from './header.module.css';

function Header() {
  return (
    <div className={styles.searchContainer}>
      <input className={styles.searchInp} type="text" name="search" id="search" />
      <button>Search</button>
    </div>
  );
}

export default Header;
