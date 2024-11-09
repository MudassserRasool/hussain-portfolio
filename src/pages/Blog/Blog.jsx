import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import FeaturedPosts from '../../components/blog/FeaturedPosts/FeaturedPosts';
import MainHero from '../../components/blog/MainHero/MainHero';
import PostDetails from '../../components/blog/PostDetails/PostDetails';
import InputField from '../../components/common/InputField/InputField';
import SmallButton from '../../components/common/buttons/SmallButton/SmallButton';
import AllBlogs from './AllBlogs';

const Blog = () => {
  const pageName = 'blog';
  const [searchParams] = useSearchParams();
  const paramsBlogId = searchParams.get('blogId');
  const [blogInput, setBlogInput] = useState('');
  const { t } = useTranslation();

  const data = (string, returnObjects = false) => {
    return t(`${pageName}.${string}`, {
      returnObjects: returnObjects,
    });
  };
  const featuredBlogs = data('featuredBlogs', true);
  const featuredBlogsArray = Array.isArray(featuredBlogs) ? featuredBlogs : [];

  const posts = data('posts', true);
  const postsArray = Array.isArray(posts) ? posts : [];
  if (!paramsBlogId) {
    return (
      <AllBlogs
        featuredBlogsArray={featuredBlogsArray}
        postsArray={postsArray}
      />
    );
  }
  const postsDetails = data('postDetails', true);
  const postsDetailsArray = Array.isArray(postsDetails) ? postsDetails : [];
  const postDetails = postsDetailsArray.find((post) => post.id == paramsBlogId);
  return (
    <div className="">
      <MainHero image={postDetails?.image} />

      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-8">
            {/* Article 1 */}
            <div>
              <PostDetails postDetails={postDetails} />
            </div>
          </div>
          {/* Right Column - Sidebar Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-2">Most popular</h3>
            <div className="flex items-center">
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

export default Blog;
