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
            className={`w-[155px] h-[31px] relative ${isDisabled ? 'opacity-50' : ''}`}
            onClick={handleMouseDown}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                borderRadius: '10px',
                overflow: 'visible',
                backgroundColor: isHovered && !isDisabled ? '#EBF5E1' : '#EBF5E1',
                boxShadow: isHovered && !isDisabled ? '5px 5px 0px rgba(0, 0, 0, 0.25), -1px 4px 2px rgba(0, 0, 0, 0.15)' : (isPressed && !isDisabled ? 'inset 4px 4px 5px rgba(0, 0, 0, 0.25)' : 'none'),
                filter: isDisabled ? 'blur(2px)' : 'none', // Apply blur effect if disabled
            }}
        >
            {/* Background Element (for hover and pressed effects) */}
            <div
                className={`bg-${isPressed ? '#EBF5E1' : 'stone-700'} w-[155px] h-[31px] bg-lime-50 rounded-[10px]`}
                
                
            />

            {/* Text Element */}
            <div
                className="font-bold absolute left-0 top-0 w-full h-full flex items-center justify-center"
                style={{
                    color: '#485935',
                    fontSize: '1.25rem',
                    fontWeight: 900,
                }}
            >
                <span
                style={{
                    color: '#485935',
                    fontSize: '1.25rem',
                    fontWeight: 900,
                }}>SORT</span>
            </div>

            {/* Disabled overlay (if disabled) */}
            {isDisabled && (
                <div
                    className="absolute left-0 top-0 w-155px h-31px bg-lime-50 rounded-[10px]"
                    
                    style={{ pointerEvents: 'none' }}
                />
            )}
        </div>
    );
};

export default Sort;