import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Messages } from '../../../assets';
import BlueBlackHeading from '../headings/BlueBlackHeading/BlueBlackHeading';

export default function Fqas({ pageName }) {
  const { t } = useTranslation();

  const data = (string, returnObjects = false) => {
    return t(`${pageName}.Faqs.${string}`, {
      returnObjects: returnObjects,
    });
  };
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = data('questions', true);
  const questionsArray = Array.isArray(questions) ? questions : [];
  return (
    <div className="flex flex-col items-center justify-center md:py-10 px-5 md:px-0">
      <div className="flex flex-col-reverse md:flex-row items-start gap-7">
        <div>
          <BlueBlackHeading
            black={data('heading.black')}
            blue={data('heading.blue')}
          />

          <div className="w-full max-w-2xl">
            <div id="accordion-collapse" data-accordion="collapse">
              {questionsArray.map((item, index) => (
                <div key={index}>
                  <h2 id={`accordion-collapse-heading-${index}`}>
                    <button
                      type="button"
                      onClick={() => toggleAccordion(index)}
                      className={`flex items-center gap-6 w-full p-3 font-medium rtl:text-right text-gray-500 ${
                        activeIndex === index ? '' : ''
                      }`}
                      aria-expanded={activeIndex === index ? 'true' : 'false'}
                      aria-controls={`accordion-collapse-body-${index}`}
                    >
                      {activeIndex === index ? (
                        <p className="text-blue-600 text-3xl">-</p>
                      ) : (
                        <p className="text-blue-600 text-3xl">+</p>
                      )}

                      <span>{item.question}</span>
                    </button>
                  </h2>
                  <div
                    id={`accordion-collapse-body-${index}`}
                    className={`ms-12 transition-max-height ease-in-out ${
                      activeIndex === index
                        ? 'max-h-screen'
                        : 'max-h-0 overflow-hidden'
                    }`}
                    aria-labelledby={`accordion-collapse-heading-${index}`}
                  >
                    <div className="text-md text-gray-500">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <img src={Messages} alt="" width={350} />
        </div>
      </div>
    </div>
  );
}
