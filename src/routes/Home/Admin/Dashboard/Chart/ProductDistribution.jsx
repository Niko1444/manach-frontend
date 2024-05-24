import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const ProductDistribution = () => {
	return (
		<div className="relative rounded-xl border p-2">
			<div className="absolute leading-3">
				<i className="fa fa-circle rounded-full border border-green_dark1 text-[0.8rem] text-offwhite"></i>
			</div>
			<div className="flex p-4">
				<div className="w-1/2 space-y-2 text-green_dark1">
					<span className="text-[1.125rem] font-bold">
						Product Distribution
					</span>
					<div className="space-y-4">
						<div className="flex space-x-2">
							<div className="bg-yellow_dark1 h-8 rounded-full text-transparent">
								check
							</div>
							<span className="text-[0.875rem]">Product in warehouse</span>
						</div>
						<div className="flex items-center space-x-2">
							<div className="bg-green_bright1 h-8 items-center rounded-full text-transparent">
								check
							</div>
							<span className="text-[0.875rem]">Product on shelf</span>
						</div>
						<div className="flex items-center space-x-2">
							<div className="h-8 rounded-full bg-green_light3 text-transparent">
								check
							</div>
							<span className="text-[0.875rem]">Product sold</span>
						</div>
					</div>
				</div>
				<div className="w-[50%]">
					<Pie
						className=""
						data={{
							labels: [],
							datasets: [
								{
									label: '',
									data: [300, 50, 100],
									backgroundColor: ['#FFD600', '#A0D900', '#D9D9D9'],
								},
							],
						}}
					></Pie>
				</div>
			</div>
		</div>
	)
}

export default ProductDistribution
