import React from 'react'

const Coupon = ({ onClose }) => {
	return (
		<div>
			<div
				style={{
					width: '900px',
					height: '700px',
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
								src="https://s3-alpha-sig.figma.com/img/d705/f58f/52b8efb8273691ea0f4aeee9a65cb99f?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PfCiQPEW4yjHYLNAtu2oM77Yo66rG753s4rbpdccTrm74H6hN4CvUhiKswOPnRwVa~WC0tSKTP9-euTy6Z8TZVk7ZHnOVgcS-G9vtDULaB2YYcmSSsM-I-fEGwUUcdYX55K23rzAbYydl8E7CoaLQvc6rwgIKwuSyJLk6DGRDtBj0kOgZg9MIiD9UrF-h6h~sIWJwGxtKmhiU3jp5nhfTWHudpFaK0bvv1UNtp34FQpgOfYR2-YtzoheRW0WgG04JIigQ-DBLfpxKNY~Ozdb-QEK44bI8Xim2JL5V0oXVb49TO1J~~aAs-uP-6el8nHWRLb42HJiSCRA803-Ix8iYA__"
							/>
							<img
								style={{ width: '60%', marginLeft: 30 }}
								src="https://s3-alpha-sig.figma.com/img/37f8/255c/87c9a86951b608b5b90921cad6f6ab13?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PGjL0RPWtgUqHvMiaYj3ysVRTSGsXjfb~y4UxmCk4Kfkz4TRs~uTweAKuGGXPoCB1kWUTMNBRnkqv53BDaeur7oRvxY2-nwgTB7930E1pUb3YORFWEifEgpFrgHOLnjydB-s8YSgPP9spbwSeR~b-L-12bKFVI9PzSqpPITncL~hwahlH2BkbCPirSqK89hBOjqIQBkrjK2eh0694obbr7LIdg~qPUG2VIEXMXtQL6C-F4zgGpqlb3PONmeIttkKQGa9nwHJQfKAophMvBhfeOI4rrjlkcGmbLUfN1i6ikJK7QdULQ6Cv6PMCp4tMELrQbc6ejYPyWfx~ItFfOZuKQ__"
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
								src="https://s3-alpha-sig.figma.com/img/8cd4/44d8/a838557fc46d2939e1930c5b020da021?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VbohRbU~0aBEG3mdg6QxhgxzZl2T60FfhSUnkqJfpPb418-bquXktu8ruvYjJmQpExjHVgtCI2ie0oH67IeEpJBp8uY99AoNKJcxOF~kb53gt-7XU0jXszA7QJgbCZ2-XOB8e57llSSlIaua8VAVdUolpbLSpoERAXmq~HN5iW03Itl~BQsbi9~uEEqhs2iW4qUIBGk~vKjqi~oqbfQjeQ8nM-y4abWNAMj7U9nAwVTJuF6ijFs9xE0cLtvXP6tJ2RoR1HYSGBQXI0w-QMynCvPsVLTaPzGhSbQCPngvSes0QlretHstGWMDmGsjBi5aQCfGk6kIDowALtcWBzx82w__"
							/>
							<img
								style={{ width: '60%', marginLeft: 30 }}
								src="https://s3-alpha-sig.figma.com/img/a14b/e163/6af3a02dfcf9c8b8f5ac10a290312514?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pKZ9yAKLhcvqmD1Y0ek0YT-w19Vl5LTabqHib1Dsws0N~zvuekZ6oC-58VwcxKji22bfezTgKjbzwDUKM6HlcGYlH165eiQ5TtO-olnPkr5qm4Cv00rcWtFsmTZEo4psiuRtENF-N7ojduSq5Qnk9lvKjc9rzNwZht1SikT-FjSFIayCG6Y~AZ6ifbaSmkAOKefFqtVwMHEKJfNCvZRmtxKfHRdLFyksTewsK4X0Btnyy1YpObz3Lh4jEptgusunkLE3t4C7w22~GNiFubbFBLG0IHsQ5YjFZCWheHvPZ8acfKwK2MpOaWIVf1kqV2d9zhNta7PyzjDexfG-i5MXdQ__"
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
								src="https://s3-alpha-sig.figma.com/img/5fcd/88e1/748d41866dad6dd06e86d35fc9a642e9?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NyWvSodV1FwOGKGfPVGo6Nb2XKwO~6pWsX5uUIVchi1ANZspdlCpFeBCbF6C3NdL~s5jKizolTGxtO8IiLYoKu7WLjasdp5~A~k3shwNJtdgvvskXPk4Xezr~0OteMstf4eKwFt6dywjw0~-Z2CiFwHFfebBFlXMglhCd1hVjYJoZ6l~w2i39k9s4PN2QKnnYbKN5JL1xYQNoQYeLrW-79y~0FQ-b3AgwDdmxmIjgb2JSt98n-~YVWcfBv0tFY24mdvN5Su3665V5H4ZUuNv9Lf6YBdS4ASlExlVdYX6XIPp4YX~v9Bvq0J21LmRV0lfoDefkBKKcRGykC~dn0ODAg__"
							/>
							<img
								style={{ width: '60%', marginLeft: 30 }}
								src="https://s3-alpha-sig.figma.com/img/a6f8/d0b4/a4e94901954c9218afed4ea140020a5c?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cqeo1XjFsjsflDMHZEfIYPsfxKZmYXJzM3NlUkfp4ip5shqoGWprxK2Iv3w4gKQflIkHjqBTPCeTC0PrIWEwWPjTrxkRVZUog9BVx4yf9yBpS3iuq8ik-Cr4p1zMRyxC6huGpItZYTf-njKJc~mLghy74SRaIpjsaVDYSNgIBhFE8W5Yv0IuofWYAt-kzqAlYs9gZte3hQLTb9ECfa3DKdq4ROJ3Ucfff2-38inyOeGLxGqcszM-zMyQww~0F1~cTz-bJdaF3ZoQQze~a-ELt1gSGM9IdHpLtDYlxp08mX69wPrcQnNgc6~Y9rGJ9LDut1fl7uasXdJwLxFQuOZNqA__"
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
                            marginLeft:'60%',
                            marginTop:'20%',
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
                                color:'white',
                                fontSize:21,
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
