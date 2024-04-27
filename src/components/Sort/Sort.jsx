import React, { useState } from 'react';

const Sort = () => {
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
            className={`w-[155px] h-[31px] relative ${isDisabled ? '#EBF5E1' : ''}`}
            onClick={handleMouseDown}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                borderRadius: '15px',
                overflow: 'hidden',
                backgroundColor: isHovered && !isDisabled ? '#EBF5E1' : '',
                boxShadow: isPressed && !isDisabled ? '8px 8px 4px rgba(0, 0, 0, 0.3) inset' : 'none',
            }}
        >
            {/* Background Element (for hover and pressed effects) */}
            <div
                className={`bg-${isPressed ? 'stone-700' : 'lime-50'} border-stone-700 h-full w-full rounded-[15px] border`}
            />

            {/* Text Element */}
            <div
                className="left-[51px] top-0 absolute text-stone-700 text-xl font-semibold font-['Poppins']"
                style={{ fontSize: '51px', zIndex: 1 }}
            >
                Log In
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

export default Sort;
