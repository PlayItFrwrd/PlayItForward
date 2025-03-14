import { useEffect, useState } from 'react';
import Header from './Header.jsx';
import Date from './Date.jsx';
import Carousel from './Carousel.jsx';
import '../index.css';

function Home() {
  useEffect(() => {
    getAllPosts();
  }, []);

  const [posts, setPosts] = useState([]); // posts = []

  //when we fetch, we will receive an array of objects

  //every elemento of the array, is an object to contain properties. aka an array of objs
  const getAllPosts = async () => {
    const response = await fetch('http://localhost:4000/api');
    const json = await response.json(); // we get an array of objects
    setPosts(json);
  };
  console.log(posts);

  return (
    <div className='flex flex-col bg-[#0c0c0c] w-screen h-screen items-center text-[#fff] font-mono font-normal text-xl'>
      <Header />
      <Date/>
      <ul className='flex flex-col w-3/4 gap-8 m-20'>
        <Carousel posts={posts}/>
      </ul>
    </div>
  );
}

export default Home;
