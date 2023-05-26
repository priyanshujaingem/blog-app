import axios from "axios";

export const getPosts = async() => {
  try {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const posts = await axios.get(url);
    // console.log(posts);
    return posts;
  } catch (error) {
    console.log(error);
  }
}