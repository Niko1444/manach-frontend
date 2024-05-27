import React, { useState, useEffect } from 'react'
import axios from 'axios'

const OrderHistory = () => {
	const [orderData, setOrderData] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchOrderData = async () => {
			try {
				const response = await axios.get(
					'http://localhost:8080/warehouse/import',
				)
				setOrderData(response.data.content)
				setIsLoading(false)
			} catch (error) {
				setError(error)
				setIsLoading(false)
			}
		}

		fetchOrderData()
	}, [])

	const backgroundStyle = {
		width: '1000px',
		height: 'auto',
		borderRadius: '10px',
		border: '1px solid #D9D9D9',
		marginTop: '67px',
		marginLeft: '62px',
		padding: '60px 0',
	}

	const boxStyle = {
		display: 'flex',
		flexDirection: 'column',
		width: '854px',
		height: '260px',
		borderRadius: '10px',
		background: '#C2C9AC',
		margin: '0 auto 25px',
	}

	const titleStyle = {
		color: '#485935',
		fontSize: '24px',
		fontWeight: '600',
		marginTop: '35px',
		marginLeft: '35px',
	}

	const contentStyle = {
		color: '#485935',
		fontSize: '20px',
		fontWeight: '400',
		marginTop: '15px',
		marginLeft: '35px',
	}

	const renderOrderBox = (order) => (
		<div style={boxStyle} key={order.import_id}>
			<div style={titleStyle}>Order no. {order.import_id}</div>
			<div style={{ display: 'flex' }}>
				<div style={contentStyle}>
					Product ID: {order.product_id} <br />
					Supplier ID: {order.supplier_id} <br />
					Quantity: {order.quantity} <br />
					Import Date: {new Date(order.import_date).toLocaleDateString()} <br />
					Supplier: {order.supplier.supplier_name}
				</div>
			</div>
		</div>
	)

	if (isLoading) return <div>Loading...</div>
	if (error) return <div>Error: {error.message}</div>

	return (
		<div style={backgroundStyle}>
			{orderData.map((order) => renderOrderBox(order))}
		</div>
	)
}

export default OrderHistory
