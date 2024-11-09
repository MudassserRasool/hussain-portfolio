import React, { useState } from 'react';

const SmallButton = ({ theme, iconPosition, icon, title, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const getButtonClass = () => {
    switch (theme) {
      case 'blue':
        return 'bg-blue-600 text-white';
      case 'dark':
        return 'bg-black text-white';
      case 'blueRounded':
        return 'bg-blue-600 text-white rounded-tr-xl rounded-bl-xl';
      default:
        return '';
    }
  };

  const handleMouseDown = () => {
    setIsClicked(true);
  };

  const handleMouseUp = () => {
    setIsClicked(false);
  };

  return (
    <button
      className={`text-sm p-2 h-[38px] rounded-r-md flex items-center ${getButtonClass()} ${
        isClicked ? 'outline-none ring-2 ring-offset-2 ring-blue-300' : ''
      } 
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 active:bg-blue-700`}
      onClick={onClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {iconPosition === 'left' && icon && <span className="mr-2">{icon}</span>}
      {title}
      {iconPosition === 'right' && icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default SmallButton;
