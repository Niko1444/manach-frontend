import React from 'react'

const Introduction = () => {
	return (
		<div className="relative top-0 h-[60rem] w-full">
			<div className="h-auto w-full">
				<img
					src="src/assets/fruits.png"
					alt="Fruits"
					style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
				/>
			</div>
			<div
				className="absolute"
				style={{
					top: '314px',
					left: '50%',
					transform: 'translateX(-50%)',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: '#FFF',
					width: '80%',
					maxWidth: '738px',
					height: '571px',
					border: '0px solid black',
					borderRadius: '8px',
					boxShadow:
						'0px 0px 2px 0px rgba(23, 26, 31, 0.12), 0px 4px 9px 0px rgba(23, 26, 31, 0.11)',
				}}
			>
				<div
					style={{
						width: '197px',
						height: '68px',
						textAlign: 'center',
						color: '#2C3721',
						fontFamily: 'Poppins',
						fontSize: '48px',
						fontWeight: '400',
						lineHeight: '68px',
						wordWrap: 'break-word',
						marginTop: '18px',
					}}
				>
					Manach
				</div>
				<div
					style={{
						width: '90%',
						color: '#485935',
						fontFamily: 'Poppins',
						fontSize: '18px',
						fontWeight: '400',
						lineHeight: '28px',
						textAlign: 'center',
					}}
				>
					At Manach, we believe everyone should indulge in fresh fruits. From
					our premium selection to our exceptional service, embracing healthy
					eating has never been easier—or more delightful! Step into our store
					and experience the freshness and nourishment of clean fruits today!
				</div>
				<div
					style={{
						width: '90%',
						color: '#2C3721',
						fontFamily: 'Poppins',
						fontSize: '24px',
						fontWeight: '700',
						lineHeight: '36px',
						wordWrap: 'break-word',
						marginTop: '16px',
						textAlign: 'left',
					}}
				>
					What's Manach
				</div>
				<div
					style={{
						width: '90%',
						color: '#485935',
						fontFamily: 'Poppins',
						fontSize: '18px',
						fontWeight: '400',
						lineHeight: '28px',
					}}
				>
					Manach is your premier online destination for clean, fresh fruits
					sourced from a variety of local and international suppliers, with a
					special emphasis on supporting rural farmers in Vietnam. We prioritize
					sourcing from local farmers, ensuring that our fruits are not only of
					the highest quality but also ethically and sustainably produced. Our
					diverse selection of clean fruits guarantees both quality and
					affordability, making healthy eating accessible to all. Join us in our
					mission to promote wellness and support local communities through
					every delicious bite of our handpicked fruits.
				</div>
				<div style={{ marginTop: '16px' }}>
					<button
						className="mb-12"
						style={{
							width: '219px',
							height: '52px',
							backgroundColor: '#485935',
							color: '#FFF',
							fontFamily: 'Inter',
							fontSize: '20px',
							fontWeight: '400',
							border: 'none',
							borderRadius: '26px',
							cursor: 'pointer',
						}}
					>
						Shopping Now
					</button>
				</div>
			</div>
		</div>
	)
}

export default Introduction
