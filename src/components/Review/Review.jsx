import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Review = () => {
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
            className={`w-[733px] h-[313px] relative ${isDisabled ? 'opacity-50' : ''}`}
            onClick={handleMouseDown}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                borderRadius: '10px',
                overflow: 'visible',
                backgroundColor: isHovered && !isDisabled ? '#FFFFFF' : '#FFFFFF',
                boxShadow: isHovered && !isDisabled ? '5px 5px 0px rgba(0, 0, 0, 0.25), -1px 4px 2px rgba(0, 0, 0, 0.15)' : (isPressed && !isDisabled ? 'inset 4px 4px 5px rgba(0, 0, 0, 0.25)' : 'none'),
                filter: isDisabled ? 'blur(5px)' : 'none', // Apply blur effect if disabled
            }}
        >
            {/* Background Element (for hover and pressed effects) */}
            <div
                className={`bg-${isPressed ? '#EBF5E1' : 'stone-700'} w-[733px] h-[313px] left-0 top-0 absolute bg-white rounded-[10px] shadow`}
            />

            {/* Text Element */}
            <div className="left-[326px] top-[56px]"
            style={{
                color: 'var(--Green-dark1, #485935)',
                fontFamily: 'Poppins',
                fontSize: '22px',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 'normal',
            }}>
                Cavendish Banana
                </div>
            <img className="w-[235px] h-[233px] left-[29px] top-[38px] bg-url(<path-to-image>)-lightgray 50% / cover no-repeat" src="https://via.placeholder.com/235x233" />
            
            <div className="w-[1.25rem]">
                <div className="w-5 h-5 left-[326px] top-[89px] absolute">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20" 
                        height="20" 
                        viewBox="0 0 20 20" 
                        fill="none">
                            <path d="M7.15323 3.408C8.42023 1.136 9.05323 0 10.0002 0C10.9472 0 11.5802 1.136 12.8472 3.408L13.1752 3.996C13.5352 4.642 13.7152 4.965 13.9952 5.178C14.2752 5.391 14.6252 5.47 15.3252 5.628L15.9612 5.772C18.4212 6.329 19.6502 6.607 19.9432 7.548C20.2352 8.488 19.3972 9.469 17.7202 11.43L17.2862 11.937C16.8102 12.494 16.5712 12.773 16.4642 13.117C16.3572 13.462 16.3932 13.834 16.4652 14.577L16.5312 15.254C16.7842 17.871 16.9112 19.179 16.1452 19.76C15.3792 20.342 14.2272 19.811 11.9252 18.751L11.3282 18.477C10.6742 18.175 10.3472 18.025 10.0002 18.025C9.65323 18.025 9.32623 18.175 8.67223 18.477L8.07623 18.751C5.77323 19.811 4.62123 20.341 3.85624 19.761C3.08924 19.179 3.21623 17.871 3.46923 15.254L3.53523 14.578C3.60723 13.834 3.64323 13.462 3.53523 13.118C3.42923 12.773 3.19024 12.494 2.71424 11.938L2.28024 11.43C0.603235 9.47 -0.234765 8.489 0.057235 7.548C0.350235 6.607 1.58024 6.328 4.04024 5.772L4.67624 5.628C5.37524 5.47 5.72424 5.391 6.00524 5.178C6.28524 4.965 6.46523 4.642 6.82523 3.996L7.15323 3.408Z" 
                            fill="#CADBB7"/>
                            <path d="M7.15372 3.408C8.42072 1.136 9.05372 0 10.0007 0C10.9477 0 11.5807 1.136 12.8477 3.408L13.1757 3.996C13.5357 4.642 13.7157 4.965 13.9957 5.178C14.2757 5.391 14.6257 5.47 15.3257 5.628L15.9617 5.772C18.4217 6.329 19.6507 6.607 19.9437 7.548C20.2357 8.488 19.3977 9.469 17.7207 11.43L17.2867 11.937C16.8107 12.494 16.5717 12.773 16.4647 13.117C16.3577 13.462 16.3937 13.834 16.4657 14.577L16.5317 15.254C16.7847 17.871 16.9117 19.179 16.1457 19.76C15.3797 20.342 14.2277 19.811 11.9257 18.751L11.3287 18.477C10.6747 18.175 10.3477 18.025 10.0007 18.025C9.65372 18.025 9.32672 18.175 8.67272 18.477L8.07672 18.751C5.77372 19.811 4.62172 20.341 3.85672 19.761C3.08972 19.179 3.21672 17.871 3.46972 15.254L3.53572 14.578C3.60772 13.834 3.64372 13.462 3.53572 13.118C3.42972 12.773 3.19072 12.494 2.71472 11.938L2.28072 11.43C0.603724 9.47 -0.234277 8.489 0.0577233 7.548C0.350723 6.607 1.58072 6.328 4.04072 5.772L4.67672 5.628C5.37572 5.47 5.72472 5.391 6.00572 5.178C6.28572 4.965 6.46572 4.642 6.82572 3.996L7.15372 3.408Z" 
                            fill="#CADBB7"/>
                            <path d="M7.15421 3.408C8.42121 1.136 9.05421 0 10.0012 0C10.9482 0 11.5812 1.136 12.8482 3.408L13.1762 3.996C13.5362 4.642 13.7162 4.965 13.9962 5.178C14.2762 5.391 14.6262 5.47 15.3262 5.628L15.9622 5.772C18.4222 6.329 19.6512 6.607 19.9442 7.548C20.2362 8.488 19.3982 9.469 17.7212 11.43L17.2872 11.937C16.8112 12.494 16.5722 12.773 16.4652 13.117C16.3582 13.462 16.3942 13.834 16.4662 14.577L16.5322 15.254C16.7852 17.871 16.9122 19.179 16.1462 19.76C15.3802 20.342 14.2282 19.811 11.9262 18.751L11.3292 18.477C10.6752 18.175 10.3482 18.025 10.0012 18.025C9.65421 18.025 9.32721 18.175 8.67321 18.477L8.07721 18.751C5.77421 19.811 4.62221 20.341 3.85721 19.761C3.09021 19.179 3.21721 17.871 3.47021 15.254L3.53621 14.578C3.60821 13.834 3.64421 13.462 3.53621 13.118C3.43021 12.773 3.19121 12.494 2.71521 11.938L2.28121 11.43C0.604212 9.47 -0.233788 8.489 0.0582116 7.548C0.351212 6.607 1.58121 6.328 4.04121 5.772L4.67721 5.628C5.37621 5.47 5.72521 5.391 6.00621 5.178C6.28621 4.965 6.46621 4.642 6.82621 3.996L7.15421 3.408Z" 
                            fill="#CADBB7"/>
                            <path d="M7.1547 3.408C8.4217 1.136 9.0547 0 10.0017 0C10.9487 0 11.5817 1.136 12.8487 3.408L13.1767 3.996C13.5367 4.642 13.7167 4.965 13.9967 5.178C14.2767 5.391 14.6267 5.47 15.3267 5.628L15.9627 5.772C18.4227 6.329 19.6517 6.607 19.9447 7.548C20.2367 8.488 19.3987 9.469 17.7217 11.43L17.2877 11.937C16.8117 12.494 16.5727 12.773 16.4657 13.117C16.3587 13.462 16.3947 13.834 16.4667 14.577L16.5327 15.254C16.7857 17.871 16.9127 19.179 16.1467 19.76C15.3807 20.342 14.2287 19.811 11.9267 18.751L11.3297 18.477C10.6757 18.175 10.3487 18.025 10.0017 18.025C9.6547 18.025 9.3277 18.175 8.6737 18.477L8.0777 18.751C5.7747 19.811 4.6227 20.341 3.8577 19.761C3.0907 19.179 3.2177 17.871 3.4707 15.254L3.5367 14.578C3.6087 13.834 3.6447 13.462 3.5367 13.118C3.4307 12.773 3.1917 12.494 2.7157 11.938L2.2817 11.43C0.6047 9.47 -0.2333 8.489 0.0586998 7.548C0.3517 6.607 1.5817 6.328 4.0417 5.772L4.6777 5.628C5.3767 5.47 5.7257 5.391 6.0067 5.178C6.2867 4.965 6.4667 4.642 6.8267 3.996L7.1547 3.408Z" 
                            fill="#CADBB7"/>
                            <path d="M7.15519 3.408C8.42219 1.136 9.05519 0 10.0022 0C10.9492 0 11.5822 1.136 12.8492 3.408L13.1772 3.996C13.5372 4.642 13.7172 4.965 13.9972 5.178C14.2772 5.391 14.6272 5.47 15.3272 5.628L15.9632 5.772C18.4232 6.329 19.6522 6.607 19.9452 7.548C20.2372 8.488 19.3992 9.469 17.7222 11.43L17.2882 11.937C16.8122 12.494 16.5732 12.773 16.4662 13.117C16.3592 13.462 16.3952 13.834 16.4672 14.577L16.5332 15.254C16.7862 17.871 16.9132 19.179 16.1472 19.76C15.3812 20.342 14.2292 19.811 11.9272 18.751L11.3302 18.477C10.6762 18.175 10.3492 18.025 10.0022 18.025C9.65519 18.025 9.32819 18.175 8.67419 18.477L8.07819 18.751C5.77519 19.811 4.62319 20.341 3.85819 19.761C3.09119 19.179 3.21819 17.871 3.47119 15.254L3.53719 14.578C3.60919 13.834 3.64519 13.462 3.53719 13.118C3.43119 12.773 3.19219 12.494 2.71619 11.938L2.28219 11.43C0.605188 9.47 -0.232812 8.489 0.0591881 7.548C0.352188 6.607 1.58219 6.328 4.04219 5.772L4.67819 5.628C5.37719 5.47 5.72619 5.391 6.00719 5.178C6.28719 4.965 6.46719 4.642 6.82719 3.996L7.15519 3.408Z" 
                            fill="#CADBB7"/>
                    </svg>
                </div>
            </div>

            <div className="left-[484px] top-[86px]"
            style={{
                color: 'var(--Green-dark1, #485935)',
                fontFamily: 'Poppins',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: '300',
                lineHeight: 'normal',
            }}>
                (24000+ Reviews)
                </div>
            
            <div className="w-[379px] left-[326px] top-[128px]"
            style={{
                color: '#000',
                textAlign: 'justify',
                fontFamily: 'Poppins',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '300',
                lineHeight: 'normal',
            }}>
                Cavendish bananas are the fruits of one of a number of banana cultivars belonging to the Cavendish subgroup of the AAA banana cultivar group.
                </div>
            
            <div className="left-[326px] top-[245px]"
            style={{
                color: 'var(--Green-dark1, #485935)',
                fontFamily: 'Poppins',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: '700',
                lineHeight: 'normal',
            }}>
                Price: 
                </div>

            <div className="left-[413px] top-[245px]"
            style={{
                color: 'var(--Green-dark1, #485935)',
                fontFamily: 'Poppins',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: '700',
                lineHeight: 'normal',
            }}>
                $5/kg
                </div>
            
            <div className="w-[3rem]">
                <div className="w-5 h-5 left-[500px] top-[234px] absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    width="48" 
                    height="48" 
                    viewBox="0 0 48 48" 
                    fill="none">
                        <path d="M0.5 15C0.5 6.99187 6.99187 0.5 15 0.5H33C41.0081 0.5 47.5 6.99187 47.5 15V33C47.5 41.0081 41.0081 47.5 33 47.5H15C6.99187 47.5 0.5 41.0081 0.5 33V15Z" 
                        stroke="#93A267"/>
                    </svg>

                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 20 20" 
                    fill="none">
                        <g clip-path="url(#clip0_161_198)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.575 3.75125C4.9775 3.75125 3.61875 4.325 2.66625 5.37125C1.7225 6.40625 1.25 7.82375 1.25 9.3925C1.25 12.1175 2.6375 14.2888 4.4 15.9775C6.155 17.6588 8.3625 18.9375 10.19 19.8937C10.3235 19.9638 10.472 20.0006 10.6228 20.0011C10.7736 20.0015 10.9223 19.9655 11.0563 19.8963C12.885 18.95 15.0912 17.6613 16.8475 15.9713C18.61 14.2775 20 12.0988 20 9.3925C20 7.8175 19.525 6.40125 18.58 5.36625C17.6263 4.3225 16.2675 3.75 14.675 3.75C13.33 3.75 12.2175 4.24875 11.3713 5.18875C11.0821 5.51459 10.8317 5.87281 10.625 6.25625C10.4183 5.87281 10.1679 5.51459 9.87875 5.18875C9.0325 4.24875 7.92 3.75125 6.575 3.75125Z" fill="#485935"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_161_198">
                                <rect width="20" height="20" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>

            <div className="w-[142px] h-12 rounded-[15px] border border-stone-500"
            style={{
                color: 'var(--Green-dark1, #485935)',
                fontFamily: 'Poppins',
                fontSize: '20px',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 'normal',
            }}>
                Add to cart
                </div>

            {/* Disabled overlay (if disabled) */}
            {isDisabled && (
                <div
                    className="absolute left-0 top-0 w-155px h-31px bg-lime-50 rounded-[10px]"
                    style={{ pointerEvents: 'none' }}
                />
            )}
        </div>
    )
};

export default Review;