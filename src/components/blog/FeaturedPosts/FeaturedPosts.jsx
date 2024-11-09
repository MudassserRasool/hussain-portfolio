import React from 'react';
import FeaturedPostsCard from './FeaturedPostsCard';

const FeaturedPosts = ({ featuredBlogsArray }) => {
  return (
    <div className=" mt-10">
      {featuredBlogsArray.map((featuredBlog, index) => (
        <div key={index} className="flex flex-col">
          <FeaturedPostsCard featuredBlog={featuredBlog} />
        </div>
      ))}
    </div>
  );
};

export default FeaturedPosts;
