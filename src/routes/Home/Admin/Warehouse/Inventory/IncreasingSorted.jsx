import SearchBar from '../../../../../components/SearchBar/SearchBar'
import Sort from '../../../../../components/Sort/Sort'
import PieChart from './PieChart'
import TableProductList from './TableProductList'
import ChoosingSort from './ChoosingSort'
import React, { useState } from 'react'
import InventorySort from '../../../../../components/InventorySort/InventorySort'


const IncreasingSorted = () => {
	return (
		<div>
			<div style={{ display: 'flex', margin: '30px' }}>
				<div
					style={{
						width: '30%',
						height: '100%',
						color: '#485935',
						fontSize: 36,
						fontFamily: 'Poppins',
						fontWeight: '600',
						wordWrap: 'break-word',
						margin: '20px 0 0 28px',
					}}
				>
					Stock Level
				</div>
				<div style={{ width: '30%' }}>
					<PieChart />
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '15px',
						margin: '15px 0 0 0',
					}}
				>
					<div style={{ display: 'flex' }}>
						<div
							style={{
								width: '60px',
								height: '25px',
								background: '#485935',
								borderRadius: 10,
							}}
						/>
						<div
							style={{
								width: '100%',
								color: '#93A267',
								fontSize: 14,
								fontFamily: 'Poppins',
								fontWeight: '400',
								wordWrap: 'break-word',
								margin: '0 0 0 15px',
							}}
						>
							High Stock Product ( 10kg )
						</div>
					</div>
					<div style={{ display: 'flex' }}>
						<div
							style={{
								width: '60px',
								height: '25px',
								background: '#93A267',
								borderRadius: 10,
							}}
						/>
						<div
							style={{
								width: '100%',
								color: '#93A267',
								fontSize: 14,
								fontFamily: 'Poppins',
								fontWeight: '400',
								wordWrap: 'break-word',
								margin: '0 0 0 15px',
							}}
						>
							Near-Low Stock Product ( 5kg )
						</div>
					</div>
					<div style={{ display: 'flex' }}>
						<div
							style={{
								width: '60px',
								height: '25px',
								background: '#C1C9AC',
								borderRadius: 10,
							}}
						/>
						<div
							style={{
								width: '100%',
								color: '#93A267',
								fontSize: 14,
								fontFamily: 'Poppins',
								fontWeight: '400',
								wordWrap: 'break-word',
								margin: '0 0 0 15px',
							}}
						>
							Low Stock Product ( 5kg )
						</div>
					</div>
					<div style={{ display: 'flex' }}>
						<div
							style={{
								width: '60px',
								height: '25px',
								background: '#ECF5E1',
								borderRadius: 10,
							}}
						/>
						<div
							style={{
								width: '100%',
								color: '#93A267',
								fontSize: 14,
								fontFamily: 'Poppins',
								fontWeight: '400',
								wordWrap: 'break-word',
								margin: '0 0 0 15px',
							}}
						>
							Out of Stock Product ( 0kg )
						</div>
					</div>
				</div>
			</div>
			<div
				style={{
					width: '75%',
					height: '100%',
					color: '#485935',
					fontSize: 36,
					fontFamily: 'Poppins',
					fontWeight: '600',
					wordWrap: 'break-word',
					margin: '0 0 50px 50px',
				}}
			>
				Product List
			</div>

			<div style={{ display: 'flex' }}>
				<div
					style={{
						width: '75%',
						height: '100%',
						color: '#485935',
						fontSize: 36,
						fontFamily: 'Poppins',
						fontWeight: '600',
						wordWrap: 'break-word',
						margin: '0 0 50px 50px',
					}}
				>
					Increasing Sorted
				</div>
				<div style={{ margin: '60px 0 0 0' }}>
					<InventorySort />
				</div>
			</div>

			<div>
				<TableProductList />
			</div>
		</div>
	)
}

export default IncreasingSorted
