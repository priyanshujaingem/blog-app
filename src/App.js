import './App.css';
import { useEffect } from 'react';
import { getPosts } from './services/api';
import { useState } from 'react';
import Card from './components/Card';
import Header from './components/Header';

function App() {
  const [post, setPost] = useState([]);
  const [resArr, setResArr] = useState([]);

  const getPostsData = async () => {
    let postData = await getPosts();
    if (postData?.data?.length > 0) {
      setResArr(postData?.data);
      setPost(postData?.data.slice(0, 5));
    }
  };

  const readMore = () => {
    setPost(resArr.slice(0, post.length + 5));
  };
  useEffect(() => {
    getPostsData();
  }, []);

  const [sortState, setSortState] = useState('none');
  const handleSort = (e) => {
    setSortState(e.target.value);
    let myPost =post.sort((a, b) => {
      if (a['title'] < b['title']) return sortState === 'descending' ? -1 : 1;
      if (a['title'] > b['title']) return sortState === 'descending' ? 1 : -1;
      return 0;
    });
    setPost(myPost);
  };

  return (
    <div className="App">
      <Header setPost={setPost} post={post} />
      <div>
        <select
          className="select"
          defaultValue={'DEFAULT'}
          onChange={(e) => handleSort(e)}
        >
          <option value="DEFAULT" disabled>
            None
          </option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
      <div className="card-container">
        {post.map((item) => (
          <Card id={item.id} title={item.title} body={item.body} />
        ))}
      </div>
      <button onClick={readMore} className="read-more">
        Read More
      </button>
    </div>
  );
}

export default App;
