import React, { useEffect, useState } from 'react';

const CusOrder = () => {
	const [orderData, setOrderData] = useState(null);

	useEffect(() => {
		const fetchOrderData = async () => {
			try {
				const response = await fetch('http://localhost:8080/user/2/order');
				const data = await response.json();
				setOrderData(data.content);
			} catch (error) {
				console.error('Error fetching order data:', error);
			}
		};

		fetchOrderData();
	}, []);

	const containerStyle = {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		margin: '0px',
	};
	const headerContainerStyle = {
		width: '95%',
		marginBottom: '20px',
		textAlign: 'left',
	};
	const infoBoxContainerStyle = {
		display: 'flex',
		justifyContent: 'space-between',
		width: '95%',
		marginBottom: '20px',
	};

	const infoBoxStyle = {
		flex: '1',
		margin: '10px',
		padding: '20px',
		border: '2px solid #D9D9D9',
		borderRadius: '15px',
		backgroundColor: 'white',
		textAlign: 'center',
		color: '#485935',
		fontSize: '20px',
		fontWeight: 'bold',
		textAlign: 'left',
	};

	const titleStyle = {
		fontSize: '22px',
		marginBottom: '5px',
	};

	const contentStyle = {
		fontSize: '16px',
		paddingLeft: '40px',
	};

	const tableStyle = {
		width: '95%',
		borderCollapse: 'collapse',
		textAlign: 'center',
	};

	const thStyle = {
		color: '#CADBB7',
		fontWeight: 700,
		fontSize: '22px',
		border: '1px solid #485935',
		backgroundColor: '#485935',
		height: '124px',
	};

	const tdStyle = {
		color: '#485935',
		fontSize: '20px',
		border: '1px solid #485935',
		height: '124px',
		padding: '20px',
	};

	const innerBorderStyle = {
		borderLeft: '1.5px solid #CADBB7',
	};

	if (!orderData) {
		return <div>Loading...</div>;
	}

	return (
		<div style={containerStyle}>
			<div style={headerContainerStyle}>
				<div className="text-stone-700 font-['Poppins'] text-[26px] font-extrabold">
					Orders
				</div>
				<div className="text-stone-500 text-lg font-['Poppins'] font-light">
					From customers
				</div>
			</div>
			<div style={infoBoxContainerStyle}>
				<div style={infoBoxStyle}>
					<div style={titleStyle}>Customer</div>
					<div style={contentStyle}>
						Name : {orderData.user.full_name} <br /> Email : {orderData.user.email} <br /> Phone : {orderData.user.phone}
					</div>
				</div>
				<div style={infoBoxStyle}>
					<div style={titleStyle}>Shipping Address</div>
					<div style={contentStyle}>123 Cong Hoa, Distric 12</div>
				</div>
				<div style={infoBoxStyle}>
					<div style={titleStyle}>Payment</div>
					<div style={contentStyle}>
						Bank Account : {orderData.user.bank_account} <br /> Card number : 010203040506
					</div>
				</div>
			</div>
			<div style={headerContainerStyle}>
				<div className="text-stone-700 text-lg font-['Poppins']">
					(Scroll down to see your entire order history table.)
				</div>
			</div>
			<table style={tableStyle}>
				<thead>
					<tr>
						<th style={{ ...thStyle, width: '14%' }}>Order ID</th>
						<th style={{ ...thStyle, ...innerBorderStyle, width: '45%' }}>Product</th>
						<th style={{ ...thStyle, ...innerBorderStyle, width: '16%' }}>Date</th>
						<th style={{ ...thStyle, ...innerBorderStyle, width: '13%' }}>Total Amount</th>
						<th style={{ ...thStyle, ...innerBorderStyle, width: '12%' }}>Price</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td style={tdStyle}>#{orderData.order_id}</td>
						<td style={{ ...tdStyle, ...innerBorderStyle }}>
							{orderData.product_id_products_order_products.map((product) => (
								<div key={product.product_id}>{product.product_name}</div>
							))}
						</td>
						<td style={{ ...tdStyle, ...innerBorderStyle }}>{new Date(orderData.order_date).toLocaleDateString()}</td>
						<td style={{ ...tdStyle, ...innerBorderStyle }}>
							{orderData.product_id_products_order_products.map((product) => (
								<div key={product.product_id}>{product.order_products.order_product_quantity}</div>
							))}
						</td>
						<td style={{ ...tdStyle, ...innerBorderStyle }}>${orderData.total_price}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default CusOrder;
