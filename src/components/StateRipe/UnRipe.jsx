// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

const UnRipe = () => {
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
			className={`relative h-[48px] w-[48px] ${isDisabled ? 'opacity-50' : ''}`}
			onClick={handleMouseDown}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			style={{
				borderRadius: '15px',
				overflow: 'visible',
				backgroundColor: isHovered && !isDisabled ? '#A0D90033' : '#A0D900',
				boxShadow:
					isPressed && !isDisabled ? '4px 4px 4px rgba(0, 0, 0, 0.25)' : 'none',
			}}
		>
			<div
				className="absolute left-0 top-0 flex h-full w-full items-center justify-center"
				style={{
					color: isHovered && !isDisabled ? '#485935' : '#FFFFF',
					fontSize: '12px',
					fontWeight: '500',
				}}
			>
				Unripe
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

export default UnRipe
