import React from 'react'
import SearchBar from '../../../../components/SearchBar/SearchBar'
import ExploreFruit from '../../../../components/ExploreFruit/ExploreFruit'
import ExploreSupplier from '../../../../components/ExploreSupplier/ExploreSupplier'
import Daily from '../../../../components/DailyDeals/DailyDeals'
import Review from '../../../../components/Review/Review'


const BerriesStore = () => {
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
						Berries
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
						From store
					</div>
				</div>
				<SearchBar />
			</div>
			<div className='flex'>
                <div className='ml-[55px]'>
                    <Review/>
                    <Review/>
					<Review/>
					<Review/>
                
                </div>

				<div className='ml-[80px]'>
					<div className="mt-4 flex justify-end">
						<div className="w-full max-w-64 space-y-4">
							<ExploreFruit />
							<ExploreSupplier />
							<Daily/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BerriesStore
