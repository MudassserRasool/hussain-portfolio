import React from 'react';
import { useTranslation } from 'react-i18next';
import BlueBlackHeading from '../../common/headings/BlueBlackHeading/BlueBlackHeading';
import MarketsCard from './MarketsCard';
const TargetMarkets = ({ pageName }) => {
  const { t } = useTranslation();
  const data = (string, returnObjects = false) => {
    return t(`${pageName}.market.${string}`, {
      returnObjects: returnObjects,
    });
  };
  const markets = data('markets', true);
  const marketsArray = Array.isArray(markets) ? markets : [];
  return (
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto">
      <div className="flex md:justify-center text-2xl  text-center">
        <BlueBlackHeading
          black={'Target Markets'}
          blue={'We serve the following industries'}
        />
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-4 gap-4">
        {marketsArray.map((market, index) => (
          <MarketsCard key={index} market={market} />
        ))}
      </div>
    </div>
  );
};

export default TargetMarkets;
