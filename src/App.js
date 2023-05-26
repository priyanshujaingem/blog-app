import './App.css';
import { useEffect } from 'react';
import { getPosts } from './services/api';
import { useState } from 'react';
import Card from './components/Card';
import Header from './components/Header';

function App() {
  const [post, setPost] = useState([]);

  const getPostsData = async () => {
    let postData = await getPosts();
    if (postData?.data?.length > 0) {
      setPost(postData?.data);
    }
  };

  useEffect(() => {
    getPostsData();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="card-container">
        {post.map((item) => (
          <Card id={item.id} title={item.title} body={item.body} />
        ))}
      </div>
      <button className="read-more">Read More</button>
    </div>
  );
}

export default App;
