import React from 'react';

const Ripe = ({ onClick, isSelected }) => {
  return (
    <button className="flex h-full w-full items-center justify-center"
      onClick={onClick}
      style={{
        width: '120px',
        height: '48px',
        fontSize: '1.25rem',
        backgroundColor: isSelected ? '#F07167' : '#F0716780',
        color: isSelected ? '#485935' : '#FFF',
        padding: '10px 20px',
        borderRadius: '15px',
      }}
    >
      Ripe
    </button>
  );
};

export default Ripe;
