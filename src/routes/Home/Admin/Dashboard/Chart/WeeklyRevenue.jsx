import { Line } from 'react-chartjs-2'
import {
	Chart as ChartJS,
	LineElement,
	PointElement,
	LinearScale,
	CategoryScale,
	Title,
	Tooltip,
	Legend,
} from 'chart.js'

// Register Chart.js components
ChartJS.register(
	LineElement,
	PointElement,
	LinearScale,
	CategoryScale,
	Title,
	Tooltip,
	Legend,
)

const WeeklyRevenue = () => {
	return (
		<div className="relative h-full rounded-xl border p-2">
			<div className="absolute leading-3">
				<i className="fa fa-circle rounded-full border border-green_dark1 text-[0.8rem] text-offwhite"></i>
			</div>

			<div className="flex justify-between p-4">
				<span className="text-[1.125rem] font-bold">Weekly Revenue ($)</span>
				<div className="flex space-x-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width={12}
						height={18}
						viewBox="0 0 12 18"
						fill="none"
					>
						<path
							d="M6.53033 0.469669C6.23744 0.176777 5.76256 0.176777 5.46967 0.469669L0.696699 5.24264C0.403805 5.53553 0.403805 6.01041 0.696699 6.3033C0.989592 6.59619 1.46447 6.59619 1.75736 6.3033L6 2.06066L10.2426 6.3033C10.5355 6.59619 11.0104 6.59619 11.3033 6.3033C11.5962 6.01041 11.5962 5.53553 11.3033 5.24264L6.53033 0.469669ZM6.75 18L6.75 1L5.25 1L5.25 18L6.75 18Z"
							fill="#485935"
						/>
					</svg>
					<span>14%</span>
				</div>
			</div>

			<div className="px-8">
				<Line
					data={{
						labels: [
							'Monday',
							'Tuesday',
							'Wednesday',
							'Thursday',
							'Friday',
							'Saturday',
							'Sunday',
						],
						datasets: [
							{
								label: 'Weekly Revenue',
								data: [100, 200, 300, 400, 500, 600, 700], // Example data, replace with actual data
								borderColor: '#485935',
								backgroundColor: 'rgba(72, 89, 53, 0.2)',
								fill: true,
							},
						],
					}}
					options={{
						scales: {
							y: {
								beginAtZero: true,
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
		</div>
	)
}

export default WeeklyRevenue
