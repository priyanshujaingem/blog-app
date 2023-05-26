import './App.css';
import { useEffect } from 'react';
import { getPosts } from './services/api';
import { useState } from 'react';
import Card from './components/Card';

function App() {
  const [post, setPost] = useState([]);
  let title = 'Card Title';
  let cardBody =
    ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nulla eveniet nihil officiis fugiat nisi impedit debitis necessitatibus!';
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
      <div className="card-container">
        <Card id="1" title={title} body={cardBody} />
        <Card id="2" title={title} body={cardBody} />
        <Card id="3" title={title} body={cardBody} />
        <Card id="4" title={title} body={cardBody} />
        <Card id="5" title={title} body={cardBody} />
      </div>
      <button className="read-more">Read More</button>
    </div>
  );
}

export default App;
