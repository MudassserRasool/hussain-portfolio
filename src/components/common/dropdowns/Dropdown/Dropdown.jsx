import React from 'react';

const Dropdown = ({
  options,
  value,
  onChange,
  width = '250px',
  placeholder,
}) => {
  return (
    <div style={{ width: width }}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: '100%',
          padding: '5px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          backgroundColor: '#222442',
          color: '#FFF',
          fontSize: '14px',
        }}
      >
        <option value="" disabled>
          {value ? value : placeholder}
        </option>
        {options &&
          options?.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Dropdown;
