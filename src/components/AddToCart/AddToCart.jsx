// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

const AddToCart = () => {
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
			className={`relative h-[108px] w-[135px] ${isDisabled ? 'opacity-50' : ''}`}
			onClick={handleMouseDown}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			style={{
				borderRadius: '10px',
				overflow: 'visible',
				backgroundColor: isHovered && !isDisabled ? '#CADBB7' : '#485935',
				boxShadow:
					isPressed && !isDisabled
						? '4px 4px 4px rgba(0, 0, 0, 0.25)'
						: 'none',
			}}
		>
			<div
				className="text-center absolute left-0 top-0 flex h-full w-full items-center justify-center"
				style={{
					color: isHovered && !isDisabled ? '#FFFFFF' : '#FFFFF',
					fontWeight: '800',
					fontSize: '18px',
				}}
			>
				Add to cart
			</div>

			{/* Disabled overlay (if disabled) */}
			{isDisabled && (
				<div
					className="bg-gray-300 absolute left-0 top-0 h-full w-full rounded-[10px] opacity-50"
					style={{ pointerEvents: 'none' }}
				/>
			)}
		</div>
	)
}

export default AddToCart
