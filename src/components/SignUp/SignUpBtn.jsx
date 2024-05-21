import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUpBtn = () => {
	const [isHovered, setIsHovered] = useState(false)
	const [isPressed, setIsPressed] = useState(false)
	const [isDisabled, setIsDisabled] = useState(false)

	const navigate = useNavigate()

	const handleMouseEnter = () => {
		if (!isPressed && !isDisabled) {
			setIsHovered(true)
		}
	}

	const handleMouseLeave = () => {
		setIsHovered(false)
	}

	const handleMouseDown = () => {
		navigate('/auth/signup')
		if (!isDisabled) {
			setIsHovered(false)
			setIsPressed(true)
			setTimeout(() => {
				setIsPressed(false)
			}, 1000)
		}
	}

	// const handleDisable = (disabled) => {
	// 	setIsDisabled(disabled)
	// }

	return (
		<div
			className={`relative h-[100px] w-60 ${isDisabled ? 'opacity-50' : ''}`}
			onClick={handleMouseDown}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			style={{
				borderRadius: '15px',
				overflow: 'hidden',
				backgroundColor: isHovered && !isDisabled ? '#FFFFFF' : '#FFFFFF',
				boxShadow:
					isPressed && !isDisabled
						? '8px 8px 4px rgba(0, 0, 0, 0.3) inset'
						: 'none',
			}}
		>
			{/* Background Element (for hover and pressed effects) */}
			<div
				className={`bg-${isPressed ? 'stone-700' : '#FFFFFF'} border-stone-700 h-full w-full rounded-[15px] border`}
			/>

			{/* Text Element */}
			<div
				className="text-stone-700 absolute left-0 top-0 flex h-full w-full items-center justify-center"
				style={{ fontSize: '40px', zIndex: 1 }}
			>
				Sign Up
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

export default SignUpBtn
