import React from 'react'
import banana from '/D/IU/SE/Project/manach-frontend/src/assets/banana.png'
import AddToCart from '../AddToCart/AddToCart.jsx'
import BuyNow from '../BuyNow/BuyNow.jsx'
import Exit from '../Exit/Exit.jsx'

const Detail = () => {
	return (
		<div
			style={{
				width: '1097px',
				height: '692px',
				display: 'grid',
				gridTemplateColumns: '889px 1fr',
				opacity: '0.8',
				background: 'var(--Green-light0, rgba(137, 185, 0, 0.50))',
			}}
		>
			<div
				className="my-auto ml-[109px]"
				style={{
					width: '733px',
					height: '520px',
					display: 'grid',
					gridTemplateColumns: '1fr 415px',
					borderRadius: '10px',
					background: '#FFF',
					boxShadow: '0px 15px 40px 0px #C2C9AC',
				}}
			>
				<div className="ml-[20px] mt-[21px]">
					<div
						style={{
							width: '298px',
							height: '259px',
							border: '1px solid #485935',
						}}
					>
						<img src={banana} alt="" />
					</div>
					<div
						className="mt-[25px]"
						style={{ color: '#485935', fontSize: '18px', fontWeight: '600' }}
					>
						Description
					</div>
					<div
						className="h-fixed w-[275px]"
						style={{
							color: '#000',
							fontSize: '16px',
							fontWeight: '300',
							textAlign: 'justify',
						}}
					>
						Apple banana, also known as Candy Apple Banana, is a distinct
						variety native to Hawaii's tropical rainforest region. Sweet, firm,
						and pink, they're perfect for snacking and desserts.
					</div>
				</div>

				<div className="ml-[46px] mt-[42px]">
					<div
						className="w-fixed mb-[28px] h-[33px]"
						style={{ color: '#93A267', fontSize: '22px', fontWeight: '600' }}
					>
						Apple Banana
					</div>
					<div
						className="mb-[28px] flex"
						style={{
							color: '#000',
							fontSize: '16px',
							fontWeight: '300',
							textAlign: 'justify',
						}}
					>
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
							style={{ color: '#485935', fontSize: '18px', fontWeight: '300' }}
						>
							(2400+ Reviews)
						</div>
					</div>
					<div
						style={{
							width: '328px',
							height: '321px',
							border: '1px solid #485935',
						}}
					>
						<div className="ml-[47px] mt-[31px]">
							<div className="mb-[20px] flex">
								<div
									style={{
										color: '#485935',
										fontSize: '18px',
										fontWeight: '600',
									}}
								>
									Quantity:
								</div>
								<div
									className="ml-1.5"
									style={{
										color: '#485935',
										fontSize: '18px',
										fontWeight: '400',
									}}
								>
									10kg
								</div>
							</div>

							<div className="mb-[20px] flex">
								<div
									style={{
										color: '#485935',
										fontSize: '18px',
										fontWeight: '600',
									}}
								>
									Product ID:
								</div>
								<div
									className="ml-1.5"
									style={{
										color: '#485935',
										fontSize: '18px',
										fontWeight: '400',
									}}
								>
									B012344
								</div>
							</div>

							<div className="mb-[20px] flex">
								<div
									style={{
										color: '#485935',
										fontSize: '18px',
										fontWeight: '600',
									}}
								>
									On-shelf date:
								</div>
								<div
									className="ml-1.5"
									style={{
										color: '#485935',
										fontSize: '18px',
										fontWeight: '400',
									}}
								>
									03/01/2024
								</div>
							</div>

							<div className="mb-[20px] flex">
								<div
									style={{
										color: '#485935',
										fontSize: '18px',
										fontWeight: '600',
									}}
								>
									Supplier:
								</div>
								<div
									className="ml-1.5"
									style={{
										color: '#485935',
										fontSize: '18px',
										fontWeight: '400',
									}}
								>
									FreshBox
								</div>
							</div>

							<div className="mb-[20px] flex">
								<div
									style={{
										color: '#485935',
										fontSize: '18px',
										fontWeight: '600',
									}}
								>
									Price:
								</div>
								<div
									className="ml-1.5"
									style={{
										color: '#485935',
										fontSize: '18px',
										fontWeight: '400',
									}}
								>
									$5/kg
								</div>
							</div>

							<div className="flex">
								<div
									style={{
										color: '#485935',
										fontSize: '18px',
										fontWeight: '600',
									}}
								>
									Ripeness:
								</div>
								<div
									className="ml-1.5"
									style={{
										color: '#485935',
										fontSize: '18px',
										fontWeight: '400',
									}}
								>
									Unripe
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="column-3 my-auto grid gap-[35px]">
				<AddToCart />
				<BuyNow />
				<Exit />
			</div>
		</div>
	)
}

export default Detail
