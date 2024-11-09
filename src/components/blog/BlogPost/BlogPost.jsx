import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../routes/routes';

const BlogPost = ({ blog }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="font-bold text-xl">{blog.title}</div>
      <div className="flex flex-row mt-2">
        <div>
          <img className="w-10" src={blog.author.authorImage} alt="logo" />
        </div>
        <div className="flex flex-col ml-2">
          <div className="font-semibold w-28">{blog.author.name}</div>
          <div className="text-xs">{blog.date}</div>
        </div>
      </div>
      <div className="mt-3">
        <img width={600} src={blog.blogImage} alt="logo" />
      </div>
      <div className="mt-3 w-[600px] text-sm">{blog.shortDescription}</div>
      <div
        className="flex items-center mt-2 cursor-pointer"
        onClick={() => navigate(`${routes.blog}/?blogId=${blog.id}`)}
      >
        <div className="text-sm  font-semibold">Read more</div>
        <div className="ml-2">
          <FaArrowRightLong color="#1e69ff" />
        </div>
      </div>
    </>
  );
};

export default BlogPost;
