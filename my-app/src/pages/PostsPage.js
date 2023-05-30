import axios from 'axios';
import { useState , useEffect } from 'react';


import { Posts } from '../components/Posts';

export const PostsPage = () => {
	const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchHandler();
  }, [])
  
  const fetchHandler = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(res.data)
    setPosts(res.data)
  }

  return (
    <div className='container pt-3'>
      <Posts posts={posts}/>
    </div>
  );
}