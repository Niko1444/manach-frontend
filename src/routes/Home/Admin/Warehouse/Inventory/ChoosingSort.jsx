import React, { useState } from 'react'

const ChoosingSort = ( ) => {
	const [IncreasingCheck, setIncreasingCheck] = useState(false)
	const [DecreasingCheck, setDecreasingCheck] = useState(false)
	const [FruitCheck, setFruitCheck] = useState(false)
	const [NoneCheck, setNoneCheck] = useState(false)

	const handleIncreasing = () => {
		setIncreasingCheck(!IncreasingCheck)
	}
	const handleDecreasing = () => {
		setDecreasingCheck(!DecreasingCheck)
	}
	const handleFruit = () => {
		setFruitCheck(!FruitCheck)
	}
	const handleNone = () => {
		setNoneCheck(!NoneCheck)
	}

	return (
		<div>
			<div
				style={{
					width: '700px',
					height: '450px',
					background: '#485935',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
                    borderRadius:"15px"
				}}
			>
				<div
					style={{
						width: '650px',
						height: '400px',
						border: '1px solid white',
						borderRadius: '15px',
					}}
				>
					<div style={{display:'grid',gap:'23px' }}>
						<div style={{ display: 'flex' }}>
							<div
								style={{
									width: '80%',
									height: '50px',
									border: '1px solid white',
									borderRadius: '15px',
									margin: '25px 0 0 25px',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									color: 'white',
									fontSize: '25px',
									fontFamily: 'Poppins',
								}}
							>
								Increase
							</div>
							<label
								style={{
									width: '20%',
									height: '50px',
									margin: '25px 0 0 25px',
									position: 'relative',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									background: '#485935',
									borderRadius: '5px',
								}}
							>
								<input
									type="checkbox"
									checked={IncreasingCheck}
									onChange={handleIncreasing}
									style={{ display: 'none' }}
								/>
								<span
									style={{
										width: '45%',
										height: '50px',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										border: '1px solid white',
										borderRadius: '15px',
										boxSizing: 'border-box',
										position: 'absolute',
										backgroundColor: '#485935',
										cursor: 'pointer',
										color: IncreasingCheck ? 'white' : 'transparent',
										fontSize: '25px',
									}}
								>
									✓
								</span>
							</label>
						</div>
						<div style={{ display: 'flex' }}>
							<div
								style={{
									width: '80%',
									height: '50px',
									border: '1px solid white',
									borderRadius: '15px',
									margin: '25px 0 0 25px',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									color: 'white',
									fontSize: '25px',
									fontFamily: 'Poppins',
								}}
							>
								Decrease
							</div>
							<label
								style={{
									width: '20%',
									height: '50px',
									margin: '25px 0 0 25px',
									position: 'relative',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									background: '#485935',
									borderRadius: '5px',
								}}
							>
								<input
									type="checkbox"
									checked={DecreasingCheck}
									onChange={handleDecreasing}
									style={{ display: 'none' }}
								/>
								<span
									style={{
										width: '45%',
										height: '50px',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										border: '1px solid white',
										borderRadius: '15px',
										boxSizing: 'border-box',
										position: 'absolute',
										backgroundColor: '#485935',
										cursor: 'pointer',
										color: DecreasingCheck ? 'white' : 'transparent',
										fontSize: '25px',
									}}
								>
									✓
								</span>
							</label>
						</div>
						<div style={{ display: 'flex' }}>
							<div
								style={{
									width: '80%',
									height: '50px',
									border: '1px solid white',
									borderRadius: '15px',
									margin: '25px 0 0 25px',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									color: 'white',
									fontSize: '25px',
									fontFamily: 'Poppins',
								}}
							>
								Fruit
							</div>
							<label
								style={{
									width: '20%',
									height: '50px',
									margin: '25px 0 0 25px',
									position: 'relative',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									background: '#485935',
									borderRadius: '5px',
								}}
							>
								<input
									type="checkbox"
									checked={FruitCheck}
									onChange={handleFruit}
									style={{ display: 'none' }}
								/>
								<span
									style={{
										width: '45%',
										height: '50px',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										border: '1px solid white',
										borderRadius: '15px',
										boxSizing: 'border-box',
										position: 'absolute',
										backgroundColor: '#485935',
										cursor: 'pointer',
										color: FruitCheck ? 'white' : 'transparent',
										fontSize: '25px',
									}}
								>
									✓
								</span>
							</label>
						</div>
						<div style={{ display: 'flex' }}>
							<div
								style={{
									width: '80%',
									height: '50px',
									border: '1px solid white',
									borderRadius: '15px',
									margin: '25px 0 0 25px',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									color: 'white',
									fontSize: '25px',
									fontFamily: 'Poppins',
								}}
							>
								None
							</div>
							<label
								style={{
									width: '20%',
									height: '50px',
									margin: '25px 0 0 25px',
									position: 'relative',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									background: '#485935',
									borderRadius: '5px',
								}}
							>
								<input
									type="checkbox"
									checked={NoneCheck}
									onChange={handleNone}
									style={{ display: 'none' }}
								/>
								<span
									style={{
										width: '45%',
										height: '50px',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										border: '1px solid white',
										borderRadius: '15px',
										boxSizing: 'border-box',
										position: 'absolute',
										backgroundColor: '#485935',
										cursor: 'pointer',
										color: NoneCheck ? 'white' : 'transparent',
										fontSize: '25px',
									}}
								>
									✓
								</span>
							</label>
						</div>
					</div>
				</div>
               
			</div>
		</div>
	)
}

export default ChoosingSort
