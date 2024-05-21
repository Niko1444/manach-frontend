import React from 'react'
import SearchBar from '../../../../components/SearchBar/SearchBar'
const ProfileSetting = () => {
	return (
		<div style={{margin:'0 0 25px 0'}}>
			<div className="flex">
				<div className="w-full justify-between p-16">
					<div
						style={{
							color: '#485935',
							fontSize: 28,
							fontFamily: 'Poppins',
							fontWeight: '800',
							wordWrap: 'break-word',
						}}
					>
						Profile Setting
					</div>
				</div>
				<SearchBar />
			</div>
			<div style={{ border: '1px solid #485935', width: '95%' ,borderRadius:'15px',margin:'0 0 0 2%'}}>
				<div
					className="flex"
					style={{
						width: '95%',
						height: 'auto',
						background: 'white',
						padding: 40,
						marginLeft: '2%',
					}}
				>
					<img
						style={{
							width: '70px',
							height: '70px',
							background: 'linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)',
							margin: '10px 0 0 50px',
							borderRadius: '50px',
						}}
						src="https://ih1.redbubble.net/image.1599532084.3177/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
					/>
					<div className=" ml-4 grid">
						<div
							style={{
								width: '100%',
								color: '#485935',
								fontSize: 40,
								fontFamily: 'Poppins',
								fontWeight: '500',
								wordWrap: 'break-word',
							}}
						>
							Lionel Messi
						</div>
						<div
							style={{
								width: '100%',
								color: '#485935',
								fontSize: 20,
								fontFamily: 'Poppins',
								fontWeight: '300',
								wordWrap: 'break-word',
							}}
						>
							Customer
						</div>
					</div>
				</div>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<div
						style={{
							display: 'grid',
							gridTemplateColumns: 'repeat(2, 1fr)',
							gridTemplateRows: 'repeat(2, 1fr)',
							gap: '70px 90px',
						}}
					>
						<div>
							<div
								style={{
									width: '410px',
									height: '206px',
									background: 'white',
									borderRadius: 15,
									border: '2px #D9D9D9 solid',
								}}
							>
								<div className="flex">
									<img
										style={{
											width: '30px',
											height: '30px',
											background:
												'linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)',
											margin: '22px 0 0 30px',
											borderRadius: '50px',
										}}
										src="https://cdn4.iconfinder.com/data/icons/social-media-2097/94/phone-512.png"
									/>
									<div
										style={{
											color: '#485935',
											fontSize: 24,
											fontFamily: 'Poppins',
											fontWeight: '500',
											wordWrap: 'break-word',
											margin: '20px 0 0 10px',
										}}
									>
										Phone Number
									</div>
								</div>
								<div
									style={{
										color: '#485935',
										fontSize: 22,
										fontFamily: 'Poppins',
										fontWeight: '275',
										wordWrap: 'break-word',
										display: 'flex',
										justifyContent: 'center',
										margin: '20px 0 0 0',
									}}
								>
									0938254478
								</div>

								<div
									style={{
										display: 'flex',
										justifyContent: 'center',
										width: '100%',
										margin: '10px 0 0 0',
									}}
								>
									<div
										style={{
											display: 'inline-block',
											color: '#485935',
											fontSize: 16,
											fontFamily: 'Poppins',
											fontWeight: 275,
											wordWrap: 'break-word',
											border: '1px solid #485935',
											padding: '20px',
											borderRadius: '15px',
											width: '70%',
											height: '60px',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
										}}
									>
										Change your phone number
									</div>
								</div>
							</div>
						</div>
						<div>
							<div
								style={{
									width: '410px',
									height: '206px',
									background: 'white',
									borderRadius: 15,
									border: '2px #D9D9D9 solid',
								}}
							>
								<div className="flex">
									<img
										style={{
											width: '30px',
											height: '30px',
											background:
												'linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)',
											margin: '22px 0 0 30px',
											borderRadius: '50px',
										}}
										src="https://cdn4.iconfinder.com/data/icons/social-media-2097/94/phone-512.png"
									/>
									<div
										style={{
											color: '#485935',
											fontSize: 24,
											fontFamily: 'Poppins',
											fontWeight: '500',
											wordWrap: 'break-word',
											margin: '20px 0 0 10px',
										}}
									>
										Payment
									</div>
								</div>
								<div
									style={{
										color: '#485935',
										fontSize: 22,
										fontFamily: 'Poppins',
										fontWeight: '275',
										wordWrap: 'break-word',
										display: 'flex',
										justifyContent: 'center',
										margin: '20px 0 0 0',
									}}
								>
									EMIUBANK-010203040506
								</div>

								<div
									style={{
										display: 'flex',
										justifyContent: 'center',
										width: '100%',
										margin: '10px 0 0 0',
									}}
								>
									<div
										style={{
											display: 'inline-block',
											color: '#485935',
											fontSize: 16,
											fontFamily: 'Poppins',
											fontWeight: 275,
											wordWrap: 'break-word',
											border: '1px solid #485935',
											padding: '20px',
											borderRadius: '15px',
											width: '70%',
											height: '60px',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
										}}
									>
										Change your payment
									</div>
								</div>
							</div>
						</div>
						<div>
							<div
								style={{
									width: '410px',
									height: '206px',
									background: 'white',
									borderRadius: 15,
									border: '2px #D9D9D9 solid',
								}}
							>
								<div className="flex">
									<img
										style={{
											width: '30px',
											height: '30px',
											background:
												'linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)',
											margin: '22px 0 0 30px',
											borderRadius: '50px',
										}}
										src="https://cdn4.iconfinder.com/data/icons/social-media-2097/94/phone-512.png"
									/>
									<div
										style={{
											color: '#485935',
											fontSize: 24,
											fontFamily: 'Poppins',
											fontWeight: '500',
											wordWrap: 'break-word',
											margin: '20px 0 0 10px',
										}}
									>
										Email
									</div>
								</div>
								<div
									style={{
										color: '#485935',
										fontSize: 22,
										fontFamily: 'Poppins',
										fontWeight: '275',
										wordWrap: 'break-word',
										display: 'flex',
										justifyContent: 'center',
										margin: '20px 0 0 0',
									}}
								>
									Banhthinoi@haha.com
								</div>

								<div
									style={{
										display: 'flex',
										justifyContent: 'center',
										width: '100%',
										margin: '10px 0 0 0',
									}}
								>
									<div
										style={{
											display: 'inline-block',
											color: '#485935',
											fontSize: 16,
											fontFamily: 'Poppins',
											fontWeight: 275,
											wordWrap: 'break-word',
											border: '1px solid #485935',
											padding: '20px',
											borderRadius: '15px',
											width: '70%',
											height: '60px',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
										}}
									>
										Change your email
									</div>
								</div>
							</div>
						</div>
						<div>
							<div
								style={{
									width: '410px',
									height: '206px',
									background: 'white',
									borderRadius: 15,
									border: '2px #D9D9D9 solid',
								}}
							>
								<div className="flex">
									<img
										style={{
											width: '30px',
											height: '30px',
											background:
												'linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)',
											margin: '22px 0 0 30px',
											borderRadius: '50px',
										}}
										src="https://cdn4.iconfinder.com/data/icons/social-media-2097/94/phone-512.png"
									/>
									<div
										style={{
											color: '#485935',
											fontSize: 24,
											fontFamily: 'Poppins',
											fontWeight: '500',
											wordWrap: 'break-word',
											margin: '20px 0 0 10px',
										}}
									>
										Address
									</div>
								</div>
								<div
									style={{
										color: '#485935',
										fontSize: 22,
										fontFamily: 'Poppins',
										fontWeight: '275',
										wordWrap: 'break-word',
										display: 'flex',
										justifyContent: 'center',
										margin: '20px 0 0 0',
									}}
								>
									123 Cong Hoa, Distric 12
								</div>

								<div
									style={{
										display: 'flex',
										justifyContent: 'center',
										width: '100%',
										margin: '10px 0 0 0',
									}}
								>
									<div
										style={{
											display: 'inline-block',
											color: '#485935',
											fontSize: 16,
											fontFamily: 'Poppins',
											fontWeight: 275,
											wordWrap: 'break-word',
											border: '1px solid #485935',
											padding: '20px',
											borderRadius: '15px',
											width: '70%',
											height: '60px',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
										}}
									>
										Change your address
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						margin: '75px 0 25px 0',
					}}
				>
					<div
						style={{
							textAlign: 'center',
							color: '#485935',
							fontSize: 22,
							fontFamily: 'Poppins',
							fontWeight: '275',
							wordWrap: 'break-word',
							border: '1px solid #485935',
							padding: '15px',
							display: 'inline-block',
							borderRadius: '15px',
						}}
					>
						Save Change
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProfileSetting
