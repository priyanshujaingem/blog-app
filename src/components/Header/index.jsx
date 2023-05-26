import React, { useState } from 'react';
import styles from './header.module.css';
import { getPosts } from '../../services/api';

function Header({ setPost, post }) {
  const [selectedValue, setSelectedValue] = useState('title');
  const [searchText, setSearchText] = useState('');
  const filterPost = async () => {
    let finalPost = post.filter((item) => {
      if (selectedValue === 'title' && searchText) {
        return item?.title?.toLowerCase()?.includes(searchText?.toLowerCase());
      } else if (selectedValue === 'body' && searchText) {
        return item?.body?.toLowerCase()?.includes(searchText?.toLowerCase());
      }
      return [];
    });
    setPost(finalPost);
    if (!searchText) {
        let postData = await getPosts();
        if (postData?.data?.length > 0) {
          setPost(postData?.data.slice(0, 5));
        }
    }
  }

  const handleSelect = (e) => {
    setSelectedValue(e.target.value);
  }

  const handleInput = (e) => {
    setSearchText(e.target.value);
  }
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
