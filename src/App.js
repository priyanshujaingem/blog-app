import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { getPosts } from './services/api';
import { useState } from 'react';

function App() {
  const [post, setPost] = useState([]);
  const getPostsData = async () => {
    let postData = await getPosts();
    if (postData?.data?.length > 0) {
      setPost(postData?.data);
    }
  }

  useEffect(() => {
    getPostsData();
  },[]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
