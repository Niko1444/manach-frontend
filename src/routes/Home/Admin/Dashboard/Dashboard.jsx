import { useDispatch, useSelector } from 'react-redux'
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
import { useEffect } from 'react'
import { dashboardThunk } from '../../../../redux/dashboardReducer/dashboardThunk'

const Dashboard = () => {
	const dispatch = useDispatch()
	const { data } = useSelector((state) => state.dashboardReducer)

	useEffect(() => {
		dispatch(dashboardThunk())
	}, [dispatch])

	return (
		<div className="space-y-8 p-8">
			{/* Title */}
			<div className="text-green_dark1">
				<div className="text-[1.635rem] font-extrabold">Dashboard</div>
				<span className="text-[1.25rem] font-medium ">Logistics Overview</span>
			</div>

			<div className="flex space-x-4">
				<div className="w-[80%]">
					<Total
						revenue={data?.revenue}
						cost={data?.cost}
						orderVolume={data?.orderVolume}
						productionVolume={data?.productionVolume}
					/>
				</div>
				<div className="w-[20%] space-y-4">
					<BestSelling bestSellingProducts={data?.bestSellingProducts} />
					<WasteProduct />
				</div>
			</div>

			<div className="flex space-x-8">
				<div className="w-[40%]">
					<div className="mb-8">
						<ProductDistribution
							productDistribution={data?.productDistribution}
						/>
					</div>
					<ShipOverview />
				</div>
				<div className="w-[60%]">
					<OrderChart weeklyOrders={data?.weeklyOrders} />
				</div>
			</div>

			<div className="flex space-x-8">
				<div className="w-[35%]">
					<WarehouseAct warehouseActivities={data?.warehouseActivities} />
				</div>
				<div className="w-[65%]">
					<WeeklyRevenue weeklyRevenue={data?.weeklyRevenue} />
				</div>
			</div>
			<div className="flex space-x-8">
				<div className="w-[25%]">
					<NewCus />
				</div>
				<div className="w-[75%]">
					<Cupon customers={data?.customers} />
				</div>
			</div>
		</div>
	)
}

export default Dashboard
