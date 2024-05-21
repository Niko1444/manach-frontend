import React from 'react'
import SearchBar from '../../../../components/SearchBar/SearchBar'
import ExploreFruit from '../../../../components/ExploreFruit/ExploreFruit'
import ExploreSupplier from '../../../../components/ExploreSupplier/ExploreSupplier'
import Daily from '../../../../components/DailyDeals/DailyDeals'
import TopFruitBanana from './TopFruitBanana'
import TopFruitMango from './TopFruitMango'
import TopFruitPineapple from './TopFruitPineapple'
import TopFruitCoconut from './TopFruitCoconut'
import TopFruitPapaya from './TopFruitPapaya'
import TopFruitDurian from './TopFruitDurian'
import TopFruitBerries from './TopFruitBerries'

const TopFruit = () => {
	return (
		<div>
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
						Top Fruits
					</div>
					<div
						style={{
							color: '#93A267',
							fontSize: 20,
							fontFamily: 'Poppins',
							fontWeight: '300',
							wordWrap: 'break-word',
						}}
					>
						From top brands
					</div>
				</div>
				<SearchBar />
			</div>
			<div className="flex">
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(2, 1fr)',
						gap: '10px',
						margin:'0 0 0 20px'
					}}
				>
					<TopFruitBanana />
					<TopFruitMango />
					<TopFruitPineapple />
					<TopFruitCoconut />
					<TopFruitPapaya />
					<TopFruitDurian />
					<TopFruitBerries />
				</div>

				<div className="ml-[80px]">
					<div className="mt-4 flex justify-end">
						<div className="w-[100%] max-w-64 space-y-4">
							<ExploreFruit />
							<ExploreSupplier />
							<Daily />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TopFruit
