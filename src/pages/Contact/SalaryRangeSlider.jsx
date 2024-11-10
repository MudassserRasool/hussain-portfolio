import React from 'react';
import { Range } from 'react-range';
import { MAX_SALARY, MIN_SALARY, RANGE_STEP } from '../../constants';

const SalaryRangeSlider = ({ values, setValues }) => {
  return (
    <div className="mb-6 w-72 md:w-full">
      <label className="block text-gray-700 font-bold mb-4 mt-3">
        Approx. budget
      </label>
      <Range
        step={RANGE_STEP}
        min={MIN_SALARY}
        max={MAX_SALARY}
        values={values}
        onChange={(newValues) => setValues(newValues)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className="h-2 bg-gray-200 rounded-full"
            // style={{ position: 'relative' }}
          >
            <div
              className="bg-blue-500 h-2 rounded-full"
              style={{
                position: 'absolute',
                left: `${
                  ((values[0] - MIN_SALARY) / (MAX_SALARY - MIN_SALARY)) * 100
                }%`,
                width: `${
                  ((values[1] - values[0]) / (MAX_SALARY - MIN_SALARY)) * 100
                }%`,
              }}
            />
            {children}
          </div>
        )}
        renderThumb={({ props, index }) => (
          <div
            {...props}
            className="w-5 h-5 bg-blue-500 rounded-full focus:outline-none"
          >
            <div className="w-full h-full" />
          </div>
        )}
      />
      <div className="flex justify-between mt-3 text-sm text-gray-600">
        <span>$500</span>
        <span>$1K</span>
        <span>$1.5K</span>
        <span>$2K</span>
        <span>$2.5K</span>
      </div>
      <div className="mt-2">
        {values[0] === MIN_SALARY && values[1] === MAX_SALARY ? (
          <p>Salary is not selected</p>
        ) : (
          <p>
            Selected range: ${values[0].toLocaleString()} - $
            {values[1].toLocaleString()}
          </p>
        )}
      </div>
    </div>
  );
};

export default SalaryRangeSlider;
