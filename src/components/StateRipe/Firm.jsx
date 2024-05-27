import React from 'react';

const Firm = ({ onClick, isSelected }) => {
  return (
    <button className="flex h-full w-full items-center justify-center"
      onClick={onClick}
      style={{
        width: '120px',
        height: '48px',
        fontSize: '1.25rem',
        backgroundColor: isSelected ? '#FFD703' : '#FFD70380',
        color: isSelected ? '#485935' : '#FFF',
        padding: '10px 20px',
        borderRadius: '15px',
      }}
    >
      Firm
    </button>
  );
};

export default Firm;
