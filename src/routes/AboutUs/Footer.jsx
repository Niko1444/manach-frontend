import React from 'react'

const Footer = () => {
	return (
		<div style={styles.footer}>
			<div className="mx-[125px]">
				<div className="container mx-auto flex justify-between">
					<div className="space-y-4">
						<span
							className="text-lime-50 text-4xl h-[74px] w-[283px] font-['Poppins']"
							style={{
								fontSize: '2.25rem',
								fontWeight: 900,
							}}
						>
							Contact Us
						</span>
						<div className="text-white flex flex-col space-y-2">
							<p>Phone: (+84) XXX - XXXXXXX</p>
							<p>Email: manach@email.com</p>
							<p>
								Address: International University-Vietnam National University
							</p>
						</div>
					</div>
					<div className="w-[200px]">
						<h2
							className="text-lime-50 text-4xl h-[74px] font-['Poppins'] font-thin"
							style={{
								fontSize: '2.25rem',
							}}
						>
							Follow Us
						</h2>
						<div className="flex items-center">
							<div
								style={{
									borderRadius: '50%',
									border: '2px solid #C1C9AC',
									padding: '5px',
									display: 'inline-flex',
									alignItems: 'center',
									justifyContent: 'center',
									width: '40px',
									height: '40px',
								}}
							>
								<i
									className="fa fa-envelope"
									style={{ fontSize: '1.25rem', color: '#C1C9AC' }}
								></i>
							</div>
							<div
								style={{
									borderRadius: '50%',
									border: '2px solid #C1C9AC',
									padding: '5px',
									display: 'inline-flex',
									alignItems: 'center',
									justifyContent: 'center',
									width: '40px',
									height: '40px',
									marginLeft: '20px',
								}}
							>
								<i
									className="fab fa-facebook-f"
									style={{ fontSize: '1.25rem', color: '#C1C9AC' }}
								></i>
							</div>
							<div
								style={{
									borderRadius: '50%',
									border: '2px solid #C1C9AC',
									padding: '5px',
									display: 'inline-flex',
									alignItems: 'center',
									justifyContent: 'center',
									width: '40px',
									height: '40px',
									marginLeft: '20px',
								}}
							>
								<i
									className="fab fa-instagram"
									style={{ fontSize: '1.25rem', color: '#C1C9AC' }}
								></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const styles = {
	footer: {
		backgroundColor: '#485935',
		color: '#ECF5E1',
		padding: '60px',
		textAlign: 'left',
		bottom: '0',
		width: '100%',
	},
}

export default Footer
