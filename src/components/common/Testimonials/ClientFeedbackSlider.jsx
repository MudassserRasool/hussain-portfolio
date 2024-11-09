// import React, { useEffect, useMemo, useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
// import BlueBlackHeading from '../headings/BlueBlackHeading/BlueBlackHeading';

// export default function ClientFeedbackSlider({ pagName }) {
//   const { t } = useTranslation();

//   // Memoize the data fetching so it doesn't change on every render
//   const data = (string, returnObjects = false) => {
//     return t(`${pagName}.clients.${string}`, {
//       returnObjects: returnObjects,
//     });
//   };

//   const reviews = useMemo(() => data('clientsReviews', true), [pagName, t]);
//   const reviewsArray = useMemo(
//     () => (Array.isArray(reviews) ? reviews : []),
//     [reviews]
//   );

//   const [activeTestimonial, setActiveTestimonial] = useState(null);

//   const handleImageClick = (testimonial) => {
//     setActiveTestimonial(testimonial);
//   };

//   useEffect(() => {
//     if (reviewsArray.length > 0 && !activeTestimonial) {
//       setActiveTestimonial(reviewsArray[0]); // Set the first testimonial only once
//     }
//   }, [reviewsArray, activeTestimonial]);
//   return (
//     <div className="flex flex-col items-center justify-center py-10 my-20">
//       <BlueBlackHeading
//         black={data('heading.black')}
//         blue={data('heading.blue')}
//       />
//       <div className="text-center mt-14">
//         <div className="flex gap-4 items-start justify-center text-blue-600">
//           <RiDoubleQuotesL size={50} />

//           <p className="text-xl italic text-gray-600 w-[55%]  mt-3">
//             {activeTestimonial?.quote}
//           </p>
//           <RiDoubleQuotesR size={50} />
//         </div>

//         <h3 className="mt-4 text-lg font-bold">{activeTestimonial?.name}</h3>
//         <p className="text-sm text-gray-500">{activeTestimonial?.position}</p>
//       </div>

//       <div className="flex mt-6 space-x-4">
//         {reviewsArray.map((testimonial) => (
//           <div
//             key={testimonial.id}
//             className={`w-12 h-12 rounded-full overflow-hidden cursor-pointer border-4 ${
//               activeTestimonial?.id === testimonial?.id
//                 ? 'border-blue-500 scale-110'
//                 : 'border-transparent'
//             }`}
//             onClick={() => handleImageClick(testimonial)}
//           >
//             <img
//               src={testimonial.image}
//               alt={testimonial.name}
//               className="object-cover w-full h-full"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import BlueBlackHeading from '../headings/BlueBlackHeading/BlueBlackHeading';

export default function ClientFeedbackSlider({ pagName }) {
  const { t } = useTranslation();

  // Memoize the data fetching so it doesn't change on every render
  const data = (string, returnObjects = false) => {
    return t(`${pagName}.clients.${string}`, {
      returnObjects: returnObjects,
    });
  };

  const reviews = useMemo(() => data('clientsReviews', true), [pagName, t]);
  const reviewsArray = useMemo(
    () => (Array.isArray(reviews) ? reviews : []),
    [reviews]
  );

  const [activeTestimonial, setActiveTestimonial] = useState(null);

  // const handleImageClick = (testimonial) => {
  //   setActiveTestimonial(testimonial);
  // };

  // Automatically change testimonial every 5 seconds
  useEffect(() => {
    if (reviewsArray.length > 0) {
      const intervalId = setInterval(() => {
        setActiveTestimonial((prev) => {
          const currentIndex = reviewsArray.findIndex(
            (review) => review.id === prev?.id
          );
          const nextIndex =
            currentIndex === -1 || currentIndex === reviewsArray.length - 1
              ? 0
              : currentIndex + 1;
          return reviewsArray[nextIndex];
        });
      }, 5000);

      return () => clearInterval(intervalId); // Cleanup on component unmount
    }
  }, [reviewsArray]);

  // Set initial activeTestimonial on reviewsArray change
  useEffect(() => {
    if (reviewsArray.length > 0 && !activeTestimonial) {
      setActiveTestimonial(reviewsArray[0]);
    }
  }, [reviewsArray, activeTestimonial]);

  return (
    <div className="flex flex-col items-center justify-center py-10 my-20 px-5 md:px-0">
      <BlueBlackHeading
        black={data('heading.black')}
        blue={data('heading.blue')}
      />
      <div className="text-center mt-14">
        <div className="flex gap-4 items-start justify-center text-blue-600">
          <RiDoubleQuotesL size={50} />

          <p className="text-xl italic text-gray-600 w-[55%]  mt-3">
            {activeTestimonial?.quote}
          </p>
          <RiDoubleQuotesR size={50} />
        </div>

        <h3 className="mt-4 text-lg font-bold">{activeTestimonial?.name}</h3>
        <p className="text-sm text-gray-500">{activeTestimonial?.position}</p>
      </div>

      {/* <div className="flex mt-6 space-x-4">
        {reviewsArray.map((testimonial) => (
          <div
            key={testimonial.id}
            className={`w-12 h-12 rounded-full overflow-hidden cursor-pointer border-4 ${
              activeTestimonial?.id === testimonial?.id
                ? 'border-blue-500 scale-110'
                : 'border-transparent'
            }`}
            onClick={() => handleImageClick(testimonial)}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div> */}
    </div>
  );
}
