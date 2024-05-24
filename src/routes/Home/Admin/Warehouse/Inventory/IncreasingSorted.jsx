import SearchBar from '../../../../../components/SearchBar/SearchBar'
import Sort from '../../../../../components/Sort/Sort'
import PieChart from './PieChart'
import TableProductList from './TableProductList'
import ChoosingSort from './ChoosingSort'
import React, { useState } from 'react'
import InventorySort from '../../../../../components/InventorySort/InventorySort'
import TableIncreasingList from './TableSortByFruit'
import TableIncreasingSorted from './TableIncreasingSorted'


const IncreasingSorted = () => {
	return (
		<div>	
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
				
			

			<div>
				<TableIncreasingSorted/>
			</div>
		</div>
	)
}

export default IncreasingSorted
