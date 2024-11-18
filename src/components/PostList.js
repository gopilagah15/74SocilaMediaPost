import React from 'react';

const PostList = ({ posts }) => {
  return (
    <div>
      <h2>Scheduled Posts</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <strong>Platform:</strong> {post.platform} <br />
            <strong>Content:</strong> {post.content} <br />
            <strong>Schedule Time:</strong> {new Date(post.scheduleTime).toLocaleString()} <br />
            <strong>Expected Likes:</strong> {post.likes} <br />
            <strong>Expected Comments:</strong> {post.comments}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
