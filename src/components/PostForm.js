import React, { useState } from 'react';

const PostForm = ({ addPost }) => {
  const [platform, setPlatform] = useState('Facebook');
  const [content, setContent] = useState('');
  const [scheduleTime, setScheduleTime] = useState('');
  const [likes, setLikes] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content || !scheduleTime || !likes || !comments) {
      alert('Please fill all fields!');
      return;
    }

    const newPost = {
      platform,
      content,
      scheduleTime,
      likes: parseInt(likes, 10),
      comments: parseInt(comments, 10),
    };

    addPost(newPost);
    setPlatform('Facebook');
    setContent('');
    setScheduleTime('');
    setLikes('');
    setComments('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <select value={platform} onChange={(e) => setPlatform(e.target.value)}>
        <option value="Facebook">Facebook</option>
        <option value="Twitter">Twitter</option>
        <option value="Instagram">Instagram</option>
      </select>
      <input
        type="text"
        placeholder="Post Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input
        type="datetime-local"
        placeholder="Schedule Time"
        value={scheduleTime}
        onChange={(e) => setScheduleTime(e.target.value)}
      />
      <input
        type="number"
        placeholder="Expected Likes"
        value={likes}
        onChange={(e) => setLikes(e.target.value)}
      />
      <input
        type="number"
        placeholder="Expected Comments"
        value={comments}
        onChange={(e) => setComments(e.target.value)}
      />
      <button type="submit">Add Post</button>
    </form>
  );
};

export default PostForm;
