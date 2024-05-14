import React from 'react'

const Review = () => {
	return (
		<div>
			<button
				style={{
					width: '733px',
					height: '313px',
					display: 'grid',
					gridTemplateColumns: '235px 1fr', // Ensure image and text are in two columns
					alignItems: 'center',
					background: '#FFF',
					boxShadow: '0px 15px 40px 0px #C2C9AC',
					cursor: 'pointer',
					padding: '25px',
				}}
			>
				{/* Image Column */}
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<img
						src="/src/assets/banana.png"
						alt="Cavendish Banana"
						style={{
							width: '235px',
							height: '233px',
						}}
					/>
				</div>

				{/* Text Column */}
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						paddingLeft: '62px',
						paddingRight: '28px',
					}}
				>
					<div
						style={{
							color: '#485935',
							fontFamily: 'Poppins',
							fontSize: '22px',
							fontWeight: '500',
						}}
					>
						Cavendish Banana
					</div>
					<div className="flex items-center" style={{ marginBottom: '19px' }}>
						<div className="flex align-middle">
							<i
								class="fa fa-star"
								style={{
									color: '#CADBB7',
									fontSize: '1.25rem',
									marginRight: '10px',
								}}
							></i>
							<i
								class="fa fa-star"
								style={{
									color: '#CADBB7',
									fontSize: '1.25rem',
									marginRight: '10px',
								}}
							></i>
							<i
								class="fa fa-star"
								style={{
									color: '#CADBB7',
									fontSize: '1.25rem',
									marginRight: '10px',
								}}
							></i>
							<i
								class="fa fa-star"
								style={{
									color: '#CADBB7',
									fontSize: '1.25rem',
									marginRight: '10px',
								}}
							></i>
							<i
								class="fa fa-star"
								style={{
									color: '#CADBB7',
									fontSize: '1.25rem',
									marginRight: '18px',
								}}
							></i>
							<div
								style={{
									color: '#485935',
									fontFamily: 'Poppins',
									fontSize: '18px',
									fontWeight: '300',
								}}
							>
								(2400+ Reviews)
							</div>
						</div>
					</div>
					<div
						style={{
							color: '#000',
							textAlign: 'justify',
							fontFamily: 'Poppins',
							fontSize: '16px',
							fontWeight: '300',
							marginBottom: '21px',
						}}
					>
						Cavendish bananas are the fruits of one of a number of banana
						cultivars belonging to the Cavendish subgroup of the AAA banana
						cultivar group.
					</div>
					<div className="flex items-center">
						<div
							style={{
								color: '#485935',
								fontFamily: 'Poppins',
								fontSize: '18px',
								fontWeight: '700',
								marginRight: '19px',
							}}
						>
							Price:
						</div>
						<div
							style={{
								color: '#485935',
								fontFamily: 'Poppins',
								fontSize: '18px',
								fontWeight: '700',
							}}
						>
							$5/kg
						</div>
					</div>
				</div>
			</button>
		</div>
	)
}

export default Review
