import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend)

// Custom plugin to draw text in the middle of the doughnut chart
const centerTextPlugin = {
	id: 'centerText',
	afterDraw: (chart) => {
		const ctx = chart.ctx
		const canvas = chart.canvas
		const chartArea = chart.chartArea
		const centerX = (chartArea.left + chartArea.right) / 2
		const centerY = (chartArea.top + chartArea.bottom) / 2
		ctx.save()
		ctx.textAlign = 'center'
		ctx.textBaseline = 'middle'
		ctx.font = '10px Poppins' // Adjust the font size and family as needed
		ctx.fillText('23 products in stock', centerX, centerY)
		ctx.restore()
	},
}

// Register the custom plugin
ChartJS.register(centerTextPlugin)

const DoughnutChart = () => {
	const data = {
		labels: [],
		datasets: [
			{
				label: '# of Votes',
				data: [10, 20, 30, 40],
				backgroundColor: ['#ECF5E1', '#C1C9AC', '#93A267', '#485935'],
				borderColor: ['#ECF5E1', '#C1C9AC', '#93A267', '#485935'],
				borderWidth: 1,
			},
		],
	}

	const options = {
		responsive: true,
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				enabled: true,
			},
			centerText: {
				display: true, // Enable the center text plugin
			},
		},
		cutoutPercentage: 70, // Adjust the percentage to increase or decrease the inner radius
	}

	return (
		<div
			style={{
				width: '220px',
				height: '220px',
				display: 'flex',
				justifyContent: 'center',
			}}
		>
			<Doughnut data={data} options={options} />
		</div>
	)
}

export default DoughnutChart
