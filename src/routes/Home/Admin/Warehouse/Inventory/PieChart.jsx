import React, { useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import axios from 'axios'

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend)

// Custom plugin to draw text in the middle of the doughnut chart
const createCenterTextPlugin = (totalProducts) => {
	return {
		id: 'centerText',
		afterDraw: (chart) => {
			const ctx = chart.ctx
			const chartArea = chart.chartArea
			const centerX = (chartArea.left + chartArea.right) / 2
			const centerY = (chartArea.top + chartArea.bottom) / 2
			ctx.save()
			ctx.textAlign = 'center'
			ctx.textBaseline = 'middle'
			ctx.font = '10px Poppins' // Adjust the font size and family as needed
			ctx.fillText(`${totalProducts} products in stock`, centerX, centerY)
			ctx.restore()
		},
	}
}

const DoughnutChart = () => {
	const [data, setData] = useState({
		labels: [],
		datasets: [
			{
				label: '# of Products',
				data: [0, 0, 0, 0], // Initialize with default values
				backgroundColor: ['#ECF5E1', '#C1C9AC', '#93A267', '#485935'],
				borderColor: ['#ECF5E1', '#C1C9AC', '#93A267', '#485935'],
				borderWidth: 1,
			},
		],
	})
	const [totalProducts, setTotalProducts] = useState(0)

	const fetchData = async () => {
		try {
			const response = await axios.get('http://localhost:8080/warehouse')
			const products = response.data.content.getProducts

			// Initialize counts for each color category
			const counts = { zero: 0, lessThan15: 0, lessThan25: 0, moreThan25: 0 }
			const uniqueProducts = new Set()

			// Process the product quantities
			products.forEach((product) => {
				const warehouseQuantity = product.warehouse_products.reduce(
					(acc, item) => acc + item.quantity,
					0,
				)
				const shelfQuantity = product.shelf_products.reduce(
					(acc, item) => acc + item.quantity,
					0,
				)
				const totalQuantity = warehouseQuantity + shelfQuantity

				uniqueProducts.add(product.product_id)

				if (totalQuantity === 0) {
					counts.zero++
				} else if (totalQuantity < 15) {
					counts.lessThan15++
				} else if (totalQuantity < 25) {
					counts.lessThan25++
				} else {
					counts.moreThan25++
				}
			})

			setData({
				labels: ['Zero', 'Less than 15', 'Less than 25', 'More than 25'],
				datasets: [
					{
						label: '# of Products',
						data: [
							counts.zero,
							counts.lessThan15,
							counts.lessThan25,
							counts.moreThan25,
						],
						backgroundColor: ['#ECF5E1', '#C1C9AC', '#93A267', '#485935'],
						borderColor: ['#ECF5E1', '#C1C9AC', '#93A267', '#485935'],
						borderWidth: 1,
					},
				],
			})
			setTotalProducts(uniqueProducts.size)
		} catch (error) {
			console.error('Error fetching the data', error)
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	useEffect(() => {
		const plugin = createCenterTextPlugin(totalProducts)
		ChartJS.register(plugin)

		return () => {
			ChartJS.unregister(plugin)
		}
	}, [totalProducts])

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
