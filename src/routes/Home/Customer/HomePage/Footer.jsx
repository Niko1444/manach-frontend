const Footer = () => {
	return (
		<div style={styles.footer} className="mx-auto bg-green_dark2">
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
						<div className="flex items-center">
							<div
								style={{
									display: 'inline-flex',
									alignItems: 'center',
									justifyContent: 'center',
									width: '40px',
									height: '40px',
									marginLeft: '100px',
									marginTop: '150px',
								}}
							>
								<i
									className="fab fa-twitter"
									style={{ fontSize: '1.25rem', color: '#2EBAE8' }}
								></i>
							</div>
							<div
								style={{
									display: 'inline-flex',
									alignItems: 'center',
									justifyContent: 'center',
									width: '40px',
									height: '40px',
									marginLeft: '20px',
									marginTop: '150px',
								}}
							>
								<i
									className="fab fa-facebook"
									style={{ fontSize: '1.25rem', color: '#2E6FE8' }}
								></i>
							</div>
							<div
								style={{
									display: 'inline-flex',
									alignItems: 'center',
									justifyContent: 'center',
									width: '40px',
									height: '40px',
									marginLeft: '20px',
									marginTop: '150px',
								}}
							>
								<i
									className="fab fa-linkedin"
									style={{ fontSize: '1.25rem', color: '#5880DE' }}
								></i>
							</div>
							<div
								style={{
									display: 'inline-flex',
									alignItems: 'center',
									justifyContent: 'center',
									width: '40px',
									height: '40px',
									marginLeft: '20px',
									marginTop: '150px',
								}}
							>
								<i
									className="fab fa-youtube"
									style={{ fontSize: '1.25rem', color: '#E82E2E' }}
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
		color: '#ECF5E1',
		padding: '60px',
		textAlign: 'left',
		bottom: '0',
		width: '100%',
	},
}

export default Footer
