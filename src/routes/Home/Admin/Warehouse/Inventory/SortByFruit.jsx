import SearchBar from '../../../../../components/SearchBar/SearchBar'
import Sort from '../../../../../components/Sort/Sort'
import PieChart from './PieChart'
import TableProductList from './TableProductList'

const SortingByFruit = () => {
	return (
		<div style={{}}>
			<div
				style={{
					display: 'flex',
				}}
			>
				<div
					style={{
						color: '#485935',
						fontSize: 26,
						fontFamily: 'Poppins',
						fontWeight: '800',
						wordWrap: 'break-word',
						margin: '63px 0 0 50px',
						width: '75%',
					}}
				>
					Warehouse Management
				</div>
				<SearchBar />
			</div>

			<div
				style={{
					display: 'flex',
					width: '100',
					margin: '60px 0 0 60px',
					gap: '50px',
				}}
			>
				<div
					style={{
						width: '210px',
						height: '60px',
						color: 'white',
						fontSize: 20,
						fontFamily: 'Poppins',
						fontWeight: '600',
						wordWrap: 'break-word',
						background: ' #485935',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						borderRadius: '15px',
					}}
				>
					Inventory
				</div>
				<div
					style={{
						width: '210px',
						height: '60px',
						color: '#485935',
						fontSize: 20,
						fontFamily: 'Poppins',
						fontWeight: '600',
						wordWrap: 'break-word',
						border: '1px solid #485935',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						borderRadius: '15px',
					}}
				>
					Re-order
				</div>
				<div
					style={{
						width: '210px',
						height: '60px',
						color: '#485935',
						fontSize: 20,
						fontFamily: 'Poppins',
						fontWeight: '600',
						wordWrap: 'break-word',
						border: '1px solid #485935',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						borderRadius: '15px',
					}}
				>
					Stock adjustment
				</div>
				<div
					style={{
						width: '210px',
						height: '60px',
						color: '#485935',
						fontSize: 20,
						fontFamily: 'Poppins',
						fontWeight: '600',
						wordWrap: 'break-word',
						border: '1px solid #485935',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						borderRadius: '15px',
					}}
				>
					Order History
				</div>
			</div>
			<div style={{ display: 'flex', margin: '30px 0 0 0' }}>
				<div
					style={{
						width: '30%',
						height: '100%',
						color: '#485935',
						fontSize: 36,
						fontFamily: 'Poppins',
						fontWeight: '600',
						wordWrap: 'break-word',
						margin: '20px 0 0 50px',
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
					Sorted By Fruit
				</div>
				<div style={{ margin: '30px 0 0 0' }}>
					<Sort />
				</div>
			</div>

			<div>
				<TableProductList />
			</div>
		</div>
	)
}

export default SortingByFruit
