import React, { useEffect, useState } from 'react';
import styles from './header.module.css';

function Header({ setPost, post }) {
  const [selectedValue, setSelectedValue] = useState('title');
  const [searchText, setSearchText] = useState('');
  const filterPost = () => {
    let finalPost = post.filter((item) => {
      if (selectedValue === 'title') {
        return item?.title?.toLowerCase()?.includes(searchText?.toLowerCase());
      } else if (selectedValue === 'body') {
        return item?.body?.toLowerCase()?.includes(searchText?.toLowerCase());
      }
    });
    setPost(finalPost);
    console.log("my post", finalPost);
  }

  const handleSelect = (e) => {
    setSelectedValue(e.target.value);
  }

  const handleInput = (e) => {
    setSearchText(e.target.value);
  }
  // useEffect(() => {
  //   console.log("my select", selectedValue);

  // }, [selectedValue])
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBy}>
        <select value={selectedValue} className={styles.select} id="searchBy" onChange={(e) => handleSelect(e)}>
          <option value="title">Title</option>
          <option value="body">Body</option>
        </select>
      </div>
      <input className={styles.searchInp} type="text" name="search" id="search" placeholder='Search with Title or Body' onChange={(e) => handleInput(e)} />
      <button className={styles.searchBtn} onClick={() => filterPost()}>Search</button>
    </div>
  );
}

export default Header;
