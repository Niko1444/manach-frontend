import React from 'react'

const ChangePhoneNum = ({onClose}) => {
	return (
		<div>
			<div
				style={{
					width: '650px',
					height: '520px',
					background: '#485935',
					borderRadius: 15,
				}}
			>
				<div
					style={{
						color: 'white',
						fontSize: 24,
						fontFamily: 'Poppins',
						fontWeight: '800',
						wordWrap: 'break-word',
						display: 'flex',
						justifyContent: 'center',
						padding: '50px',
					}}
				>
					Fill in to change your phone number.
				</div>
				<div
					style={{
						color: 'white',
						fontSize: 24,
						fontFamily: 'Poppins',
						fontWeight: '500',
						wordWrap: 'break-word',
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					Your current phone number :
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						marginTop: '20px',
					}}
				>
					<input
						type="text"
						style={{
							width: '60%',
							height: '40px',
							fontSize: '18px',
							borderRadius: '15px',
							padding: '5px',
							boxSizing: 'border-box',
						}}
						placeholder="   Enter your current phone number"
					/>
				</div>
				<div
					style={{
						color: 'white',
						fontSize: 24,
						fontFamily: 'Poppins',
						fontWeight: '500',
						wordWrap: 'break-word',
						display: 'flex',
						justifyContent: 'center',
						margin: '20px 0 0 0',
					}}
				>
					Your new phone number :
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						marginTop: '20px',
					}}
				>
					<input
						type="text"
						style={{
							width: '60%',
							height: '40px',
							fontSize: '18px',
							borderRadius: '15px',
							padding: '5px',
							boxSizing: 'border-box',
						}}
						placeholder="   Enter your new phone number"
					/>
				</div>
				<div
					style={{
                        margin:'70px 0 0 30px',
						width: '120px',
						height: '60px',
						textAlign: 'center',
						color: 'white',
						fontSize: 21,
						fontFamily: 'Poppins',
						fontWeight: '300',
						wordWrap: 'break-word',
                        border:'1px solid white',
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        borderRadius:'15px'
					}}
					onClick={onClose}
				>
					Back
				</div>
			</div>
		</div>
	)
}

export default ChangePhoneNum
