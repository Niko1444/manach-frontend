import { useRef, useEffect } from 'react'
import {
	Chart as ChartJS,
	ArcElement,
	Tooltip,
	Legend,
	BarElement,
	CategoryScale,
	LinearScale,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
	ArcElement,
	Tooltip,
	Legend,
	BarElement,
	CategoryScale,
	LinearScale,
)

const OrderChart = ({ weeklyOrders }) => {
	console.log('OrderChart ~ weeklyOrders:', weeklyOrders)
	const chartRef = useRef(null)

	useEffect(() => {
		return () => {
			if (chartRef.current) {
				chartRef.current.destroy()
			}
		}
	}, [])

	return (
		<div className="relative h-full rounded-xl border p-2">
			<div className="absolute leading-3">
				<i className="fa fa-circle rounded-full border border-green_dark1 text-[0.8rem] text-offwhite"></i>
			</div>
			<div className="p-4 text-green_dark1">
				<span className="text-[1.125rem] font-bold">Weekly Order</span>
			</div>

			<div className="h-[14rem] px-8">
				<Bar
					ref={chartRef}
					data={{
						labels: weeklyOrders?.map((item) => item.date),
						datasets: [
							{
								label: 'Orders',
								data: weeklyOrders?.map((item) => item.totalOrders),
								backgroundColor: ['#FFD600', '#A0D900', '#D9D9D9'],
								borderRadius: 5,
								barThickness: 30,
							},
						],
					}}
					options={{
						maintainAspectRatio: false,
						scales: {
							x: {
								type: 'category',
								display: true,
							},
							y: {
								type: 'linear',
								display: true,
							},
						},
						plugins: {
							legend: {
								display: false,
							},
						},
					}}
				/>
			</div>

			<div className="space-y-4 p-4 text-green_dark1">
				<span className="text-[1.125rem] font-bold">Upcoming orders</span>
				<div className="space-y-4 rounded-lg border border-grey_light1 bg-[#FAFAFB] px-8 py-4">
					<div className="flex space-x-4">
						<i className="fa fa-calendar-check  text-[3rem]"></i>
						<div>
							<span className="text-redpink_dark1">25 Order</span>
							<div>Total successfully placed orders</div>
						</div>
					</div>
					<div className="flex space-x-4">
						<i className="fa fa-box text-[3rem]"></i>
						<div>
							<span className="text-redpink_dark1">12 Order</span>
							<div>Total packaged orders</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default OrderChart
