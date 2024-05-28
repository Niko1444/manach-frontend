import React from 'react'
import fiveoff from '../../assets/fiveoff.png'
import tenoff from '../../assets/tenoff.png'
import twofiveoff from '../../assets/twofiveoff.png'
import Durian from '../../assets/Durian.png'
import banana from '../../assets/banana.png'
import bigstraw from '../../assets/bigstraw.png'

const Coupon = ({ onClose }) => {
	return (
		<div
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				backgroundColor: 'rgba(0, 0, 0, 0.5)', 
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				zIndex: 1000, 
			}}
		>
			<div
				style={{
					width: '900px',
					height: '640px',
					borderRadius: 20,
					display: 'flex',
					flexDirection: 'row',
					background: 'white',
				}}
			>
				<div
					style={{
						width: '65%',
						flexDirection: 'column',
						alignItems: 'center',
						padding: '30px',
						display: 'flex',
					}}
				>
					<div style={{ width: '100%' }}>
						<div className="flex">
							<div
								style={{
									color: '#485935',
									fontSize: 26,
									fontFamily: 'Poppins',
									fontWeight: '600',
									wordWrap: 'break-word',
								}}
							>
								Daily Deals
							</div>
							<div
								style={{
									textAlign: 'center',
									color: '#485935',
									fontSize: 16,
									fontFamily: 'Poppins',
									fontWeight: '275',
									wordWrap: 'break-word',
									padding: '15px',
								}}
							>
								(Enter the code to apply the coupons)
							</div>
						</div>
						<hr
							style={{
								borderTop: '3px solid black',
								width: '90%',
								marginTop: '10px',
							}}
						/>
						<div className="mt-4 flex">
							<img
								style={{
									width: '25%',
								}}
								src={bigstraw}
							/>
							<img
								style={{ width: '60%', marginLeft: 30 }}
								src={fiveoff}
							/>
						</div>
						<hr
							style={{
								borderTop: '3px solid black',
								width: '90%',
								marginTop: '10px',
							}}
						/>
						<div className="mt-4 flex">
							<img
								style={{
									width: '25%',
								}}
								src={banana}
							/>
							<img
								style={{ width: '60%', marginLeft: 30 }}
								src={tenoff}
							/>
						</div>
						<hr
							style={{
								borderTop: '3px solid black',
								width: '90%',
								marginTop: '10px',
							}}
						/>
						<div className="mt-4 flex">
							<img
								style={{
									width: '25%',
								}}
								src={Durian}
							/>
							<img
								style={{ width: '60%', marginLeft: 30 }}
								src={twofiveoff}
							/>
						</div>
					</div>
				</div>
				<div
					style={{
						width: '35%',
						background: '#485935',
						borderRadius: 15,
					}}
				>
					<div
						style={{
							textAlign: 'center',
							color: 'white',
							fontSize: 26,
							fontFamily: 'Poppins',
							fontWeight: '600',
							wordWrap: 'break-word',
							width: '100%',
							marginTop: '30px',
						}}
					>
						Remaining coupons
					</div>
					<hr
						style={{
							borderTop: '3px solid white',
							width: '80%',
							marginTop: '10px',
							marginLeft: 'auto',
							marginRight: 'auto',
						}}
					/>
					<div
						style={{
							width: '45px',
							height: '45px',
							background: '#ECF5E1',
							borderRadius: '50%',
							marginTop: '10px',
							marginLeft: 'auto',
							marginRight: 'auto',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							fontSize: '24px',
						}}
					>
						5
					</div>
					<div
						style={{
							width: '50%',
							height: '10%',
							background: 'white',
							borderRadius: 15,
							marginTop: '10px',
							marginLeft: 'auto',
							marginRight: 'auto',
						}}
					>
						<div
							style={{
								textAlign: 'center',
								color: '#485935',
								fontSize: 24,
								fontFamily: 'Poppins',
								fontWeight: 275,
								wordWrap: 'break-word',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								height: '80%',
							}}
						>
							SBR12345
						</div>
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
							}}
						>
							<hr
								style={{
									borderTop: '3px solid black',
									width: '80%',
								}}
							/>
						</div>
					</div>
					<hr
						style={{
							borderTop: '3px solid white',
							width: '80%',
							marginTop: '30px',
							marginLeft: 'auto',
							marginRight: 'auto',
						}}
					/>
					<div
						style={{
							width: '45px',
							height: '45px',
							background: '#ECF5E1',
							borderRadius: '50%',
							marginTop: '10px',
							marginLeft: 'auto',
							marginRight: 'auto',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							fontSize: '24px',
						}}
					>
						2
					</div>
					<div
						style={{
							width: '50%',
							height: '10%',
							background: 'white',
							borderRadius: 15,
							marginTop: '10px',
							marginLeft: 'auto',
							marginRight: 'auto',
						}}
					>
						<div
							style={{
								textAlign: 'center',
								color: '#485935',
								fontSize: 24,
								fontFamily: 'Poppins',
								fontWeight: 275,
								wordWrap: 'break-word',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								height: '80%',
								width: '100%',
							}}
						>
							LoveBanana
						</div>
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
							}}
						>
							<hr
								style={{
									borderTop: '3px solid black',
									width: '80%',
								}}
							/>
						</div>
					</div>
					<hr
						style={{
							borderTop: '3px solid white',
							width: '80%',
							marginTop: '30px',
							marginLeft: 'auto',
							marginRight: 'auto',
						}}
					/>
					<div
						style={{
							width: '45px',
							height: '45px',
							background: '#ECF5E1',
							borderRadius: '50%',
							marginTop: '10px',
							marginLeft: 'auto',
							marginRight: 'auto',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							fontSize: '24px',
						}}
					>
						1
					</div>
					<div
						style={{
							width: '50%',
							height: '10%',
							background: 'white',
							borderRadius: 15,
							marginTop: '10px',
							marginLeft: 'auto',
							marginRight: 'auto',
						}}
					>
						<div
							style={{
								textAlign: 'center',
								color: '#485935',
								fontSize: 24,
								fontFamily: 'Poppins',
								fontWeight: 275,
								wordWrap: 'break-word',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								height: '80%',
								width: '100%',
							}}
						>
							SBR12345
						</div>
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
							}}
						>
							<hr
								style={{
									borderTop: '3px solid black',
									width: '80%',
								}}
							/>
						</div>
					</div>
					<div
						style={{
							position: 'relative',
							marginLeft: '60%',
							marginTop: '10%',
							cursor: 'pointer',
						}}
						onClick={onClose}
					>
						<div
							style={{
								width: '103px',
								height: '52.27px',
								borderRadius: 15,
								border: '1px solid white',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								cursor: 'pointer',
								color: 'white',
								fontSize: 21,
								fontFamily: 'Poppins',
								cursor: 'pointer',
							}}
							onClick={onClose}
						>
							Back
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Coupon
