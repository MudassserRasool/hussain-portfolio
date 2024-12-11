import React from 'react';

const DropdownField = ({
  label = '',
  name = 'dropdown',
  options = [],
  value = '',
  onChange,
  isCompulsory = false,
  width = 250,
  color = '#ffffff',
  textColor = '#000000',
  removeRoundedFromRight = false,
  displaySteric = true,
  placeholder = '',
}) => {
  const dropdownClass = removeRoundedFromRight
    ? `block w-full px-3 py-2 border rounded-l-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`
    : `block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`;

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label && label}
        {isCompulsory && displaySteric && (
          <span className="text-red-600">*</span>
        )}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={isCompulsory}
        style={{ width: width, backgroundColor: color, color: textColor }}
        className={dropdownClass}
      >
        {options.length > 0 ? (
          options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))
        ) : (
          <option value="">No options available</option>
        )}
      </select>
    </div>
  );
};

export default DropdownField;
