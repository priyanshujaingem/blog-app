import React from 'react';
import styles from './header.module.css';

function Header() {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBy}>
        <select className={styles.select} id="searchBy">
          <option value="title">Title</option>
          <option value="body">Body</option>
        </select>
      </div>
      <input className={styles.searchInp} type="text" name="search" id="search" placeholder='Search with Title or Body' />
      <button className={styles.searchBtn}>Search</button>
    </div>
  );
}

export default Header;
