import React from 'react'
import { useNavigate } from 'react-router-dom'
import SearchBar from '../../../../components/SearchBar/SearchBar'
import ExploreFruit from '../../../../components/ExploreFruit/ExploreFruit'
import ExploreSupplier from '../../../../components/ExploreSupplier/ExploreSupplier'
import Daily from '../../../../components/DailyDeals/DailyDeals'
import ReviewBanana from '../../../../components/Review/ReviewBanana'

const BananaStore = () => {
	const navigate = useNavigate()

	const handleBackClick = () => {
		navigate('/customer/store')
	}

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
						Banana
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
			<div className="flex">
				<div className="ml-[55px]">
					<div
						className="flex h-full w-full items-center justify-center mb-[10px]"
						onClick={handleBackClick}
						style={{
							color:'white',
							cursor: 'pointer',
							width: '100px',
							height: '35px',
							fontSize: '1.25rem',
							padding: '10px 20px',
							borderRadius: '15px',
							background: '#7C7C7C'
						}}
					>
						Back
					</div>
					<ReviewBanana />
				</div>

				<div className="ml-[80px]">
					<div className="mt-4 flex justify-end">
						<div className="w-full max-w-64 space-y-4">
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

export default BananaStore
