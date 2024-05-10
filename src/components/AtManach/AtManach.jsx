import React from 'react'
import LogIn from '../LogIn/LogIn'
import Explore from '../Explore/Explore'

const AtManach = () => {
	return (
		<div>
			<div
				style={{
					width: '100vw',
					height: '100%',
					backgroundColor: '#485935',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					padding: '60px', // Adjust the padding to increase the background size around the text
				}}
			>
				<div
					style={{
						width: '756px',
						height: '72px',
						textAlign: 'center',
						color: '#ECF5E1',
						fontSize: 26,
						fontFamily: 'Poppins',
						fontWeight: '500',
						wordWrap: 'break-word',
					}}
				>
					At Manach, we're passionate about bringing the freshest, juiciest
					fruits straight to your fingertips.
				</div>
			</div>
			<div style={{ display: 'flex' }}>
				<div style={{ paddingLeft: '230px', paddingTop: '100px' }}>
					<Explore />
				</div>
				<div style={{ display: 'grid', paddingLeft: '100px' ,paddingTop:'100px',gridGap:'10px'}}>
					<div
						style={{
							width: '800px',
							height: '105.67px',
							color: '#485935',
							fontSize: 30,
							fontFamily: 'Poppins',
							fontWeight: '700',
							wordWrap: 'break-word',
                            padding:'50px'
						}}
					>
						Manach brings you a spectrum of fruits at their peak of perfection.
					</div>
					<div
						style={{
							width: '800px',
							height: '100px',
							color: '#485935',
							fontSize: 20,
							fontFamily: 'Poppins',
							fontWeight: '400',
							wordWrap: 'break-word',
                            padding:'50px'
						}}
					>
						Whether you crave the familiar comfort of a classic apple or the 
                        exotic allure of a tropical mango, we've got you covered!
					</div>
				</div>
			</div>
		</div>
	)
}

export default AtManach
