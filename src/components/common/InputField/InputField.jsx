import React from 'react';

const InputField = ({
  label = '',
  name = 'name',
  value = '',
  onChange,
  isCompulsory = false,
  isTextArea = false,
  placeholder,
  width = 250,
  removeRoundedFromRight = false,
  color = '#fffff',
  textColor,
  displaySteric = true,
}) => {
  const inputClass = removeRoundedFromRight
    ? `block w-full px-3 py-2 border  rounded-l-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`
    : `block w-full px-3 py-2 border  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`;

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label && label}
        {isCompulsory && displaySteric && (
          <span className="text-red-600">*</span>
        )}
      </label>

      {isTextArea ? (
        <textarea
          style={{ width: width, backgroundColor: color, color: textColor }}
          placeholder={placeholder}
          id={name}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={isCompulsory}
          rows={5}
          className=" block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      ) : (
        <input
          style={{ width: width, backgroundColor: color, color: textColor }}
          placeholder={placeholder}
          type="text"
          id={name}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={isCompulsory}
          className={inputClass}
        />
      )}
    </div>
  );
};

export default InputField;
