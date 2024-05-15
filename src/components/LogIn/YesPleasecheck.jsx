import React, { useState } from 'react'

const YesPleasecheck = () => {
	const [isHovered, setIsHovered] = useState(false)
	const [isPressed, setIsPressed] = useState(false)
	const [isDisabled, setIsDisabled] = useState(false)

	const handleMouseEnter = () => {
		if (!isPressed && !isDisabled) {
			setIsHovered(true)
		}
	}

	const handleMouseLeave = () => {
		setIsHovered(false)
	}

	const handleMouseDown = () => {
		if (!isDisabled) {
			setIsHovered(false)
			setIsPressed(true)
			setTimeout(() => {
				setIsPressed(false)
			}, 200)
		}
	}

	// eslint-disable-next-line no-unused-vars
	const handleDisable = (disabled) => {
		setIsDisabled(disabled)
	}

	return (
		<div
			className="h-[72px] w-[311px]"
			onClick={handleMouseDown}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			style={{
				position: 'relative',
				borderRadius: '15px',
				overflow: 'visible',
				backgroundColor: isHovered && !isDisabled ? '#CADBB7' : '#485935',
				boxShadow: isHovered ? '4px 4px 4px rgba(0, 0, 0, 0.4)' : 'none',
				display: 'flex',
				alignItems: 'center', // Center vertically
				justifyContent: 'center', // Center horizontally
			}}
		>
			<div
				style={{
					fontFamily: 'Poppins, sans-serif',
					color: isHovered && !isDisabled ? '#485935' : '#FFFFFF',
					fontWeight: 700,
					fontSize: '1rem',
				}}
			>
				Yes, please check this page!
			</div>

			{/* Disabled overlay (if disabled) */}
			{isDisabled && (
				<div
					className="bg-gray-300 absolute left-0 top-0 h-full w-full rounded-[15px] opacity-50"
					style={{ pointerEvents: 'none' }}
				/>
			)}
		</div>
	)
}

export default YesPleasecheck
