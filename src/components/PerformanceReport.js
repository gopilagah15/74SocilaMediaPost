import React from 'react';

const PerformanceReport = ({ posts }) => {
  const totalPosts = posts.length;
  const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0);
  const totalComments = posts.reduce((sum, post) => sum + post.comments, 0);

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Monthly Performance Report</h2>
      <p>Total Posts Scheduled: {totalPosts}</p>
      <p>Total Expected Likes: {totalLikes}</p>
      <p>Total Expected Comments: {totalComments}</p>
    </div>
  );
};

export default PerformanceReport;
