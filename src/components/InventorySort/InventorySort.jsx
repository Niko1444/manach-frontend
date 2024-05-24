import React, { useState, useRef, useEffect } from 'react'

const InventorySort = ({ onSelectOption }) => {
	const [isHovered, setIsHovered] = useState(false)
	const [isPressed, setIsPressed] = useState(false)
	const [isDisabled, setIsDisabled] = useState(false)
	const [showDropdown, setShowDropdown] = useState(false)
	const buttonRef = useRef(null)
	const dropdownRef = useRef(null)

	useEffect(() => {
		const handleResize = () => {
			if (buttonRef.current) {
				const buttonWidth = buttonRef.current.offsetWidth
				if (buttonWidth && dropdownRef.current) {
					dropdownRef.current.style.width = `${buttonWidth}px`
				}
			}
		}

		window.addEventListener('resize', handleResize)
		handleResize()

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

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
			setIsPressed(!isPressed) // Toggle pressed state
			setShowDropdown(!showDropdown) // Toggle dropdown visibility
		}
	}

	const handleDisable = (disabled) => {
		setIsDisabled(disabled)
	}

	const handleOptionClick = (option) => {
		setShowDropdown(false)
		setIsPressed(false)
		onSelectOption(option)
	}

	return (
		<div
			ref={buttonRef}
			className={`relative h-[31px] w-[155px] ${isDisabled ? 'opacity-50' : ''}`}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			style={{
				borderRadius: '10px',
				overflow: 'visible',
				backgroundColor: isHovered && !isDisabled ? '#EBF5E1' : '#EBF5E1',
				boxShadow:
					isHovered && !isDisabled
						? '5px 5px 0px rgba(0, 0, 0, 0.25), -1px 4px 2px rgba(0, 0, 0, 0.15)'
						: isPressed && !isDisabled
							? 'inset 4px 4px 5px rgba(0, 0, 0, 0.25)'
							: 'none',
				filter: isDisabled ? 'blur(2px)' : 'none', // Apply blur effect if disabled
				position: 'relative', // Ensure proper positioning of dropdown
				display: 'inline-block', // Ensures that the dropdown stays inline with the button
			}}
		>
			<div
				className={`bg-${isPressed ? '#EBF5E1' : 'stone-700'} bg-lime-50 h-[31px] w-[155px] rounded-[10px]`}
			/>

			<div
				className="absolute left-0 top-0 flex h-full w-full items-center justify-center font-bold"
				style={{
					color: '#485935',
					fontSize: '1.25rem',
					fontWeight: 900,
					zIndex: 1, // Ensure the text is above the dropdown
				}}
			>
				<span
					onClick={handleMouseDown}
					style={{
						color: '#485935',
						fontSize: '1.25rem',
						fontWeight: 900,
						cursor: 'pointer',
					}}
				>
					SORT
				</span>
			</div>

			{showDropdown && (
				<div
					className="bg-white absolute bottom-full mb-2 rounded"
					style={{ minWidth: '100px', zIndex: 2 }}
					ref={dropdownRef}
				>
					<ul style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
						<li
							style={{
								color: '#485935',
								fontSize: '1.25rem',
								fontWeight: 900,
								cursor: 'pointer',
								width: '153px',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								gap: '10px',
								background: '#EBF5E1',
								borderRadius: '10px',
							}}
							onClick={() => handleOptionClick('Increase')}
						>
							Increase
						</li>
						<li
							style={{
								color: '#485935',
								fontSize: '1.25rem',
								fontWeight: 900,
								cursor: 'pointer',
								width: '153px',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								gap: '10px',
								background: '#EBF5E1',
								borderRadius: '10px',
							}}
							onClick={() => handleOptionClick('Decrease')}
						>
							Decrease
						</li>
						<li
							style={{
								color: '#485935',
								fontSize: '1.25rem',
								fontWeight: 900,
								cursor: 'pointer',
								width: '153px',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								gap: '10px',
								background: '#EBF5E1',
								borderRadius: '10px',
							}}
							onClick={() => handleOptionClick('Fruit')}
						>
							Fruit
						</li>
						<li
							style={{
								color: '#485935',
								fontSize: '1.25rem',
								fontWeight: 900,
								cursor: 'pointer',
								width: '153px',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								gap: '10px',
								background: '#EBF5E1',
								borderRadius: '10px',
							}}
							onClick={() => handleOptionClick('None')}
						>
							None
						</li>
					</ul>
				</div>
			)}

			{isDisabled && (
				<div
					className="w-155px h-31px bg-lime-50 absolute left-0 top-0 rounded-[10px]"
					style={{ pointerEvents: 'none' }}
				/>
			)}
		</div>
	)
}

export default InventorySort
