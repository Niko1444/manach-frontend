import React from 'react';

const UnRipe = ({ onClick, isSelected }) => {
  return (
    <button className="flex h-full w-full items-center justify-center"
      onClick={onClick}
      style={{
        width: '120px',
        height: '48px',
        fontSize: '1.25rem',
        backgroundColor: isSelected ? '#89B900' : '#89B90080',
        color: isSelected ? '#485935' : '#FFF',
        padding: '10px 20px',
        borderRadius: '15px',
      }}
    >
      Unripe
    </button>
  );
};

export default UnRipe;
