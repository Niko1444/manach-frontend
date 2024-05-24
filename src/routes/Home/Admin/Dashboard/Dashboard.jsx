import BestSelling from './Chart/BestSelling'
import Cupon from './Chart/Foot/Cupon'
import NewCus from './Chart/Foot/NewCus'
import OrderChart from './Chart/OrderChart'
import ProductDistribution from './Chart/ProductDistribution'
import ShipOverview from './Chart/ShipOverview'
import Total from './Chart/Total'
import WarehouseAct from './Chart/WarehouseAct'
import WasteProduct from './Chart/WasteProduct'
import WeeklyRevenue from './Chart/WeeklyRevenue'

const Dashboard = () => {
	return (
		<div className="space-y-8 p-8">
			{/* Title */}
			<div className="text-green_dark1">
				<div className="text-[1.635rem] font-extrabold">Dashboard</div>
				<span className="text-[1.25rem] font-medium ">Logistics Overview</span>
			</div>

			<div className="flex space-x-4">
				<div className="w-[80%]">
					<Total />
				</div>
				<div className="w-[20%] space-y-4">
					<BestSelling />
					<WasteProduct />
				</div>
			</div>

			<div className="flex space-x-8">
				<div className="w-[40%]">
					<div className="mb-8">
						<ProductDistribution />
					</div>
					<ShipOverview />
				</div>
				<div className="w-[60%]">
					<OrderChart />
				</div>
			</div>

			<div className="flex space-x-8">
				<div className="w-[35%]">
					<WarehouseAct />
				</div>
				<div className="w-[65%]">
					<WeeklyRevenue />
				</div>
			</div>
			<div className="flex space-x-8">
				<div className="w-[25%]">
					<NewCus />
				</div>
				<div className="w-[75%]">
					<Cupon />
				</div>
			</div>
		</div>
	)
}

export default Dashboard
