import React from 'react'

const ThankYou = () => {
	return (
		<div
			style={{
				width: '664px',
				height: '403px',
				position: 'relative',
				background: 'white',
				borderRadius: 15,
				overflow: 'hidden',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div
				style={{
					position: 'absolute',
					top: '20px', 
					left: '20px', 
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					width: 103,
					height: 52.27,
					borderRadius: 15,
					border: '1px solid #485935', 
				}}
			>
				<div
					style={{
						textAlign: 'center',
						color: '#485935',
						fontSize: 21,
						fontFamily: 'Poppins',
						fontWeight: '300',
						wordWrap: 'break-word',
					}}
				>
					Back
				</div>
			</div>
			<div
				style={{
					textAlign: 'center',
					color: '#485935',
					fontSize: 26,
					fontFamily: 'Poppins',
					fontWeight: '600',
					wordWrap: 'break-word',
					marginTop: 20,
				}}
			>
				Thank you for your Report!
			</div>
			<div
				style={{
					width: 389,
					textAlign: 'center',
					color: '#485935',
					fontSize: 20,
					fontFamily: 'Poppins',
					fontWeight: '275',
					wordWrap: 'break-word',
					marginTop: 20,
				}}
			>
				We are very sorry for this inconvenience.
				<br />
				The system has reported errors and will be fixed as soon as possible to
				improve for customers.
			</div>
			<div style={{ width: 48, height: 48, marginTop: 20 }}>
				{/* SVG Image */}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="48"
					height="48"
					viewBox="0 0 48 48"
					fill="none"
				>
					<path
						d="M5.50005 14.81C-0.489946 26.4 22.3701 39.47 24.0001 39.47C25.7901 39.47 48.4801 26.4 42.5001 14.81C39.8701 10.35 33.0001 3.25001 24.0001 14.81C18.6201 7.00001 10.2701 6.39001 5.50005 14.81Z"
						stroke="#F07167"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</div>
		</div>
	)
}

export default ThankYou
