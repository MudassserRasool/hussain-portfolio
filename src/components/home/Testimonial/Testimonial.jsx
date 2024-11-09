import React from 'react';
import Testimonials from '../../common/Testimonials/Testimonials';
const Testimonial = ({ pagName }) => {
  return (
    <div className="bg-[#191B4D] py-5 mx-auto   ">
      <div className="w-full">
        <Testimonials pagName={pagName} />
      </div>
    </div>
  );
};

export default Testimonial;
