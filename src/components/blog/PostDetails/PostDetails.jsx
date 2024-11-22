import React from 'react';

const PostDetails = ({ postDetails }) => {
  return (
    <div>
      <div>
        <p className="w-64 font-medium text-xl mb-4">{postDetails.title}</p>
        <img
          loading="lazy"
          width={600}
          className=" mb-8"
          src={postDetails.image}
          alt="logo "
        />

        {postDetails.details.map((detail, index) => (
          <div key={index}>
            <p className="w-[600px] font-semibold text-[13px] mb-2">
              {detail.title}
            </p>
            {detail.description.map((desc, index) => (
              <p className="w-[600px] text-sm" key={index}>
                {desc}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostDetails;
