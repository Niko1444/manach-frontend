import React from 'react'
import banana from '../../assets/banana.png'
import Ripe from '../StateRipe/Ripe.jsx'
import Firm from '../StateRipe/Firm.jsx'
import UnRipe from '../StateRipe/UnRipe.jsx'

const Review = () => {
	return (
		<div className='mb-[20px]'>
			<div
				style={{
					width: '733px',
					height: '313px',
					display: 'grid',
					gridTemplateColumns: '326px 1fr',
					background: '#FFF',
					borderRadius: '10px',
					boxShadow: '0px 15px 40px 0px #C2C9AC',
				}}
			>
				<div className="m-auto">
					<img src={banana} alt="" />
				</div>
				<div className="mt-[56px]">
					<div style={{ color: '#485935', fontSize: '22px', fontWeight: '500' }}>Cavendish Banana</div>
					<div className="mb-[19px] flex">
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
						className="h-fixed w-[379px]"
						style={{ color: '#000', fontSize: '16px', fontWeight: '300' }}
					>
						Cavendish bananas are the fruits of one of a number of banana
						cultivars belonging to the Cavendish subgroup of the AAA banana
						cultivar group.
					</div>
					<div className="flex">
						<div className="my-auto flex">
							<div
								className="mr-[19px]"
								style={{
									color: '#485935',
									fontSize: '18px',
									fontWeight: '700',
								}}
							>
								Price:
							</div>
							<div
								className="mr-[28px]"
								style={{
									color: '#485935',
									fontSize: '18px',
									fontWeight: '700',
								}}
							>
								$5/kg
							</div>
						</div>
						<div className="my-auto flex">
							<div className="mr-[10px]">
								<Ripe />
							</div>
							<div className="mr-[10px]">
								<Firm />
							</div>
							<UnRipe />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Review
