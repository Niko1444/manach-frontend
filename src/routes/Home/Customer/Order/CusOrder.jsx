
import React from 'react'

const CusOrder = () => {
	const containerStyle = {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		margin: '0px',
	}
	const headerContainerStyle = {
		width: '95%',
		marginBottom: '20px',
		textAlign: 'left',
	}
	const infoBoxContainerStyle = {
		display: 'flex',
		justifyContent: 'space-between',
		width: '95%',
		marginBottom: '20px',
	}

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
	}

	const titleStyle = {
		fontSize: '22',
		marginBottom: '5px',
	}

	const contentStyle = {
		fontSize: '16px',
		paddingLeft: '40px'
	}

	const tableStyle = {
		width: '95%',
		borderCollapse: 'collapse',
		textAlign: 'center',
	}

	const thStyle = {
		color: '#CADBB7',
		fontWeight: 700,
		fontSize: '22px',
		border: '1px solid #485935',
		backgroundColor: '#485935',
		height: '124px',
	}

	const tdStyle = {
		color: '#485935',
		fontSize: '20px',
		border: '1px solid #485935',
		height: '124px',
		padding: '20px',
	}

	const innerBorderStyle = {
		borderLeft: '1.5px solid #CADBB7',
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
						Name : Banh Thi Phuong Nam <br /> Email : Banhthinoi@haha.com <br />{' '}
						Phone : 097622789
					</div>
				</div>
				<div style={infoBoxStyle}>
					<div style={titleStyle}>Shipping Address</div>
					<div style={contentStyle}>123 Cong Hoa, Distric 12</div>
				</div>
				<div style={infoBoxStyle}>
					<div style={titleStyle}>Payment</div>
					<div style={contentStyle}>
						Bank Account : EMIUBANK <br /> Card number : 010203040506
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
						<th style={{ ...thStyle, ...innerBorderStyle, width: '45%' }}>
							Product
						</th>
						<th style={{ ...thStyle, ...innerBorderStyle, width: '16%' }}>
							Date
						</th>
						<th style={{ ...thStyle, ...innerBorderStyle, width: '13%' }}>
							Total Amount
						</th>
						<th style={{ ...thStyle, ...innerBorderStyle, width: '12%' }}>
							Price
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td style={tdStyle}>#Bc1001</td>
						<td style={{ ...tdStyle, ...innerBorderStyle }}>
							Vietnamese with flat seed Durian
						</td>
						<td style={{ ...tdStyle, ...innerBorderStyle }}>26 April 2024</td>
						<td style={{ ...tdStyle, ...innerBorderStyle }}>23</td>
						<td style={{ ...tdStyle, ...innerBorderStyle }}>$250</td>
					</tr>
					<tr>
						<td style={tdStyle}>#Dg2789</td>
						<td style={{ ...tdStyle, ...innerBorderStyle }}>
							Strawberry <br /> Blackberry
						</td>
						<td style={{ ...tdStyle, ...innerBorderStyle }}>26 April 2024</td>
						<td style={{ ...tdStyle, ...innerBorderStyle }}>
							15 <br /> 22
						</td>
						<td style={{ ...tdStyle, ...innerBorderStyle }}>$420</td>
					</tr>
					<tr>
						<td style={tdStyle}>#Ae4586</td>
						<td style={{ ...tdStyle, ...innerBorderStyle }}>
							Sunrise Papaya <br /> Strawberry <br /> Apple Banana <br /> Honey
							Mango <br /> Vietnamese with flat seed Durian
						</td>
						<td style={{ ...tdStyle, ...innerBorderStyle }}>25 April 2024</td>
						<td style={{ ...tdStyle, ...innerBorderStyle }}>
							3 <br /> 10 <br /> 10 <br /> 6 <br /> 22
						</td>
						<td style={{ ...tdStyle, ...innerBorderStyle }}>$1450</td>
					</tr>
					<tr>
						<td style={tdStyle}>#Bc1077</td>
						<td style={{ ...tdStyle, ...innerBorderStyle }}>
							Strawberry Coconut
						</td>
						<td style={{ ...tdStyle, ...innerBorderStyle }}>30 April 2024</td>
						<td style={{ ...tdStyle, ...innerBorderStyle }}>23</td>
						<td style={{ ...tdStyle, ...innerBorderStyle }}>$250</td>
					</tr>
				</tbody>
			</table>
 d5abed3366619d745b571c5cca0f76f8e9f91623
		</div>
	)
}

export default CusOrder
