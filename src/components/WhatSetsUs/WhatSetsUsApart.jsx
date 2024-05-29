const WhatSetsUsApart = () => {
	return (
		<div className="mt-[100px]">
			{/*What sets us apart?*/}
			<div
				style={{
					// width: '100vw',
					height: '128vh',
					backgroundColor: '#485935',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-start',
					paddingLeft: '170px',
				}}
			>
				<div
					style={{
						width: '528px',
						height: '106px',
						color: '#ECF5E1',
						fontSize: '48px',
						fontWeight: '700',
						paddingTop: '107px',
					}}
				>
					What sets us apart?
				</div>
				<div
					style={{
						width: '700px',
						height: '138px',
						color: '#CADBB7',
						fontFamily: 'Poppins',
						fontSize: '20px',
						fontStyle: 'normal',
						fontWeight: '500',
						lineHeight: 'normal',
						whiteSpace: 'normal',
						paddingTop: '100px',
					}}
				>
					It's our constant dedication to sourcing from trusted suppliers who
					value quality as much as we do. Any fruit products in Manach has a
					specific origin, being gathered directly from farmers that value
					premium quality and sustainable farming methods.
				</div>
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(3, minmax(300px, 1fr))',
						paddingTop: '180px',
						gridGap: '86px',
					}}
				>
					<div className="m-auto h-fit w-full">
						<img
							src="/src/assets/pic_1.png"
							alt=""
							style={{
								width: '300px',
								height: '350px',
								background:
									'url(<path-to-image>) lightgray 50% / cover no-repeat',
							}}
						/>
					</div>
					<div className="m-auto h-fit w-full">
						<img
							src="/src/assets/pic_2.png"
							alt=""
							style={{
								width: '300px',
								height: '350px',
								background:
									'url(<path-to-image>) lightgray 50% / cover no-repeat',
							}}
						/>
					</div>
					<div className="m-auto h-fit w-full">
						<img
							src="/src/assets/pic_3.png"
							alt=""
							style={{
								width: '300px',
								height: '350px',
								background:
									'url(<path-to-image>) lightgray 50% / cover no-repeat',
							}}
						/>
					</div>
				</div>
			</div>

			{/*What are you craving for?*/}
			<div className="flex">
				<div>
					<img
						src="/src/assets/pic_4.png"
						alt=""
						style={{
							// position: 'absolute', top: '128vh', left: '0',
							width: '100%',
							height: '100%',
							background:
								'url(<path-to-image>) lightgray 50% / cover no-repeat',
						}}
					/>
				</div>

				<div className="m-auto">
					<div
						style={{
							width: '533px',
							height: '60px',
							color: '#485935',
							fontSize: '40px',
							fontHeight: '700',
							whiteSpace: 'nowrap',
						}}
					>
						What are you craving for?
					</div>
					<div
						style={{
							width: '179px',
							height: '36px',
							color: '#485935',
							fontSize: '24px',
							fontWeight: '500',
							paddingTop: '27px',
						}}
					>
						Visit our store
					</div>
					<div
						style={{
							width: '531px',
							height: '164px',
							color: '#485935',
							fontSize: '16px',
							fontWeight: '400',
							paddingTop: '60px',
						}}
					>
						Discover a world of flavors and delights at our store. Whether you
						have a sweet tooth or a savory craving, we have something to satisfy
						every taste bud. From freshly baked goods to gourmet treats, our
						selection is sure to please. Experience the finest quality products
						and exceptional service. Indulge in your cravings and find your
						favorites today. Visit us and treat yourself to a delightful
						shopping experience. Your cravings deserve the best, and that's
						exactly what we offer. Come see us and explore the delicious
						possibilities!
					</div>
					<div style={{ marginLeft: '12rem', paddingTop: '120px' }}>
						<button
							style={{
								width: '186px',
								height: '38px',
								backgroundColor: '#93A267',
								fontColor: '#48593',
								fontFamily: 'Poppins',
								fontSize: '20px',
								fontWeight: '500',
								border: 'none',
								borderRadius: '8px',
								cursor: 'pointer',
							}}
						>
							VISIT STORE
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default WhatSetsUsApart
