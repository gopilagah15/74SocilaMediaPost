import React, { useState } from 'react'; 
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import PerformanceReport from './components/PerformanceReport';

const App = () => {
  const [posts, setPosts] = useState([]);

  // Add a new post
  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Social Media Post Scheduler</h1>
      <PostForm addPost={addPost} />
      <PostList posts={posts} />
      <PerformanceReport posts={posts} />
    </div>
  );
};

export default App;
