import React from 'react';

const FeaturedPostsCard = ({ featuredBlog }) => {
  return (
    <div className="flex flex-row mb-2">
      <div>
        <img className="w-40" src={featuredBlog.image} alt="work" />
      </div>
      <div className="flex flex-col ml-4">
        <div className="w-32 text-base font-normal">{featuredBlog.title}</div>
        <div className="text-gray-400 text-sm">{featuredBlog.author}</div>
      </div>
    </div>
  );
};

export default FeaturedPostsCard;
