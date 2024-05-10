import React, { useState } from 'react';

const Create = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isPressed, setIsPressed] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    const handleMouseEnter = () => {
        if (!isPressed && !isDisabled) {
            setIsHovered(true);
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleMouseDown = () => {
        if (!isDisabled) {
            setIsHovered(false);
            setIsPressed(true);
            setTimeout(() => {
                setIsPressed(false);
            }, 200);
        }
    };

    const handleDisable = (disabled) => {
        setIsDisabled(disabled);
    };

    return (
        <div
            className={`w-[251px] h-[70px] relative ${isDisabled ? 'opacity-50' : ''}`}
            onClick={handleMouseDown}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                borderRadius: '15px',
                overflow: 'visible',
                backgroundColor: isHovered && !isDisabled ? '#485935' : '#ECF5E1',
                boxShadow: isPressed && !isDisabled ? '8px 8px 4px rgba(0, 0, 0, 0.3) inset' : 'none',
            }}
        >
            {/* Background Element (for hover and pressed effects) */}
            {/* <div
                className={`bg-${isPressed ? 'white' : 'stone-700'} border-stone-700 h-full w-full rounded-[15px] border`}
            /> */}

            {/* Text Element */}
            <div
                className="text-stone-700 font-Poppins absolute left-0 top-0 w-full h-full flex items-center justify-center"
                style={{ 
                    color: isHovered && !isDisabled ? '#FFFFFF' : '#485935',
                    fontWeight: 700,    
                    fontSize: '1.875rem', 
                    zIndex: 1 }}
            >
                Create
            </div>

            {/* Disabled overlay (if disabled) */}
            {isDisabled && (
                <div
                    className="absolute left-0 top-0 w-full h-full bg-gray-300 opacity-50 rounded-[15px]"
                    style={{ pointerEvents: 'none' }}
                />
            )}
        </div>
    );
};

export default Create;