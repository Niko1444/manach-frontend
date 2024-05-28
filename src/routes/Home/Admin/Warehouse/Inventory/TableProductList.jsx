import React, { useState, useEffect } from 'react'

const TableProductList = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await fetch('http://localhost:8080/warehouse')
				const result = await response.json()
				const productsList = result.content.getProducts
				shuffle(productsList) // Shuffle the products array
				setProducts(productsList)
			} catch (error) {
				console.error('Error fetching products:', error)
			}
		}

		fetchProducts()
	}, [])

	// Function to shuffle array elements
	const shuffle = (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1))
			;[array[i], array[j]] = [array[j], array[i]]
		}
	}

	const convertGoogleDriveLink = (url) => {
		if (!url) {
			return ''
		}

		if (url.startsWith('https://drive.google.com/uc?export=view&id=')) {
			return url
		}

		const fileIdMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/)
		if (fileIdMatch) {
			return `https://drive.google.com/uc?export=view&id=${fileIdMatch[1]}`
		}

		return url
	}

	const calculateTotalQuantity = (warehouseProducts, shelfProducts) => {
		const warehouseQuantity = warehouseProducts.reduce(
			(acc, item) => acc + item.quantity,
			0,
		)
		const shelfQuantity = shelfProducts.reduce(
			(acc, item) => acc + item.quantity,
			0,
		)
		return warehouseQuantity + shelfQuantity
	}

	const determineStatus = (quantity) => {
		if (quantity === 0) {
			return { status: 'Out of stock', color: '#F07167' }
		} else if (quantity < 6) {
			return { status: 'Low stock', color: '#FFD600' }
		} else if (quantity < 11) {
			return { status: 'Near-low stock', color: '#A0D900' }
		} else {
			return { status: 'High stock', color: '#485935' }
		}
	}

	return (
		<div style={{ padding: '1rem' }}>
			<table
				style={{
					minWidth: '100%',
					borderCollapse: 'collapse',
					border: '1px solid #485935',
				}}
			>
				<thead>
					<tr>
						<th
							style={{
								border: '1px solid #485935',
								padding: '8px',
								textAlign: 'center',
								fontWeight: 'bold',
								width: '85px',
							}}
						></th>
						<th
							style={{
								border: '1px solid #485935',
								color: '#485935',
								fontSize: 20,
								fontFamily: 'Poppins',
								fontWeight: '500',
								wordWrap: 'break-word',
								textAlign: 'center',
								fontWeight: 'bold',
							}}
						>
							Name
						</th>
						<th
							style={{
								border: '1px solid #485935',
								color: '#485935',
								fontSize: 20,
								fontFamily: 'Poppins',
								fontWeight: '500',
								wordWrap: 'break-word',
								textAlign: 'center',
								fontWeight: 'bold',
							}}
						>
							Quantity in stock
						</th>
						<th
							style={{
								border: '1px solid #485935',
								color: '#485935',
								fontSize: 20,
								fontFamily: 'Poppins',
								fontWeight: '500',
								wordWrap: 'break-word',
								textAlign: 'center',
								fontWeight: 'bold',
							}}
						>
							Status
						</th>
					</tr>
				</thead>
				<tbody>
					{products.map((product) => {
						const totalQuantity = calculateTotalQuantity(
							product.warehouse_products,
							product.shelf_products,
						)
						const { status, color } = determineStatus(totalQuantity)
						const imageUrl =
							convertGoogleDriveLink(product.product_img) ||
							'https://via.placeholder.com/70'
						return (
							<tr key={product.product_id}>
								<td
									style={{
										padding: '8px',
										textAlign: 'center',
										borderLeft: '1px solid #485935',
										borderRight: '1px solid #485935',
									}}
								>
									<img
										src={imageUrl}
										alt={product.product_name}
										style={{ height: '70px' }}
									/>
								</td>
								<td
									style={{
										color: '#485935',
										fontSize: 20,
										fontFamily: 'Poppins',
										fontWeight: '400',
										wordWrap: 'break-word',
										textAlign: 'center',
										borderLeft: '1px solid #485935',
										borderRight: '1px solid #485935',
									}}
								>
									{product.product_name}
								</td>
								<td
									style={{
										color: '#485935',
										fontSize: 20,
										fontFamily: 'Poppins',
										fontWeight: '400',
										wordWrap: 'break-word',
										textAlign: 'center',
										borderLeft: '1px solid #485935',
										borderRight: '1px solid #485935',
									}}
								>
									{totalQuantity}
								</td>
								<td
									style={{
										color: color,
										fontSize: 20,
										fontFamily: 'Poppins',
										fontStyle: 'italic',
										fontWeight: '900',
										wordWrap: 'break-word',
										textAlign: 'center',
									}}
								>
									{status}
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}

export default TableProductList