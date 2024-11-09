import React, { useState } from 'react';
import BlogPost from '../../components/blog/BlogPost/BlogPost';
import FeaturedPosts from '../../components/blog/FeaturedPosts/FeaturedPosts';
import Hero from '../../components/blog/Hero/Hero';
import InputField from '../../components/common/InputField/InputField';
import SmallButton from '../../components/common/buttons/SmallButton/SmallButton';

const AllBlogs = ({ featuredBlogsArray, postsArray }) => {
  const [blogInput, setBlogInput] = useState('');
  return (
    <div className="">
      <Hero setBlogInput={setBlogInput} blogInput={blogInput} />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-8">
            {/* Article 1 */}
            <div className="flex flex-col space-y-10">
              {postsArray.map((blog, index) => (
                <div key={index}>
                  <BlogPost blog={blog} />
                </div>
              ))}
            </div>
          </div>
          {/* Right Column - Sidebar Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-2">Most popular</h3>
            <div className="flex items-center mb-10">
              <InputField
                value={blogInput}
                onChange={setBlogInput}
                placeholder="Search the blog"
                removeRoundedFromRight
              />
              <SmallButton title="Search" theme="blue" />
            </div>
            <FeaturedPosts featuredBlogsArray={featuredBlogsArray} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
