import { Tabs } from 'flowbite-react';

import React from 'react';
import { useTranslation } from 'react-i18next';
import BlueBlackHeading from '../headings/BlueBlackHeading/BlueBlackHeading';
const OurTechStack = ({ pageName }) => {
  const { t } = useTranslation();
  const data = (string, returnObjects = false) => {
    return t(`${pageName}.teachStacks.${string}`, {
      returnObjects: returnObjects,
    });
  };
  const stacks = data('stacks', true);
  const stacksArray = Array.isArray(stacks) ? stacks : [];
  return (
    <div className=" max-w-screen-xl px-4 py-8 mx-auto">
      <div className="flex justify-center">
        <BlueBlackHeading
          black={data('heading.black')}
          blue={data('heading.blue')}
        />
      </div>
      <div className="flex  justify-center">
        <Tabs
          aria-label="Tabs with underline"
          variant="underline"
          className="border-none ml-12  md:ms-28 "
        >
          {stacksArray.map((stack, index) => (
            <Tabs.Item key={index} title={stack.title}>
              <div className="md:flex  md:justify-center md:items-center md:gap-2 grid ml-12 grid-cols-2 ">
                {stack.icons.map((icon, index) => (
                  <img
                    key={index}
                    src={process.env.PUBLIC_URL + '/' + icon}
                    alt=""
                    width={100}
                    height={100}
                  />
                ))}
              </div>
            </Tabs.Item>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default OurTechStack;
