import React, { useState, useEffect } from 'react'
import Group from '../../../../../assets/Group.svg'
import Group2 from '../../../../../assets/Group2.svg'
import Vector from '../../../../../assets/Vector.svg'
import Vector2 from '../../../../../assets/Vector2.svg'
import Group3 from '../../../../../assets/Group3.svg'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const ReOrder = () => {
	const [showProductList, setShowProductList] = useState(true)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [products, setProducts] = useState([])

	useEffect(() => {
		fetch('http://localhost:8080/warehouse/reorder')
			.then((response) => response.json())
			.then((data) => {
				setProducts(data.content)
			})
			.catch((error) => console.error('Error fetching product data:', error))
	}, [])

	const productListStyle = {
		color: '#485935',
		fontSize: '36px',
		fontWeight: 700,
		marginBottom: '30px',
		marginTop: '40px',
	}

	const tableStyle = {
		width: 'auto',
		borderCollapse: 'collapse',
		textAlign: 'center',
		maxWidth: '95%',
	}

	const thStyle = {
		color: '#485935',
		fontWeight: 500,
		fontSize: '20px',
		border: '1px solid #485935',
		height: '50px',
	}

	const tdStyle = {
		color: '#485935',
		fontSize: '20px',
		border: '1px solid #485935',
		height: '100px',
		padding: '20px',
	}

	const innerBorderStyle = {
		borderLeft: '1.5px solid #CADBB7',
	}

	const openModal = () => {
		setIsModalOpen(true)
	}

	const closeModal = () => {
		setIsModalOpen(false)
	}

	return (
		<div>
			<div style={productListStyle}>
				Product List <br /> Increasing order
			</div>

			{showProductList && (
				<table style={tableStyle}>
					<thead>
						<tr>
							<th style={{ ...thStyle, width: '10%' }}></th>
							<th style={{ ...thStyle, ...innerBorderStyle, width: '18%' }}>
								Name
							</th>
							<th style={{ ...thStyle, ...innerBorderStyle, width: '20%' }}>
								Quantity in stock
							</th>
							<th style={{ ...thStyle, ...innerBorderStyle, width: '18%' }}>
								Status
							</th>
							<th style={{ ...thStyle, ...innerBorderStyle, width: '12%' }}>
								Re-order
							</th>
						</tr>
					</thead>

					<tbody>
						{products.map((product, index) => (
							<tr key={product.product.product_id}>
								<td style={tdStyle}>
									<img src={product.product.product_img} style={{ maxWidth: '100%' }} alt={product.product.product_name} />
								</td>
								<td style={{ ...tdStyle, ...innerBorderStyle }}>
									{product.product.product_name}
								</td>
								<td style={{ ...tdStyle, ...innerBorderStyle }}>
									{product.quantity}
								</td>
								<td style={{ ...tdStyle, ...innerBorderStyle }}>
									{product.quantity === 0 ? 'Out of stock' : 'In stock'}
								</td>
								<td style={{ ...tdStyle, ...innerBorderStyle }}>
									<button 
										className="h-[40px] w-[135px] rounded-[20px] bg-green"
										onClick={openModal}
									>
										Re-order
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}

			<Modal
				isOpen={isModalOpen}
				onRequestClose={closeModal}
				contentLabel="Add Items to Shelf"
				style={{
					overlay: {
						backgroundColor: 'rgba(0, 0, 0, 0.75)',
					},
					content: {
						backgroundColor: '#485935',
						top: '50%',
						left: '50%',
						right: 'auto',
						bottom: 'auto',
						marginRight: '-50%',
						transform: 'translate(-50%, -50%)',
						padding: '20px',
						borderRadius: '20px',
						border: '0px',
						width: '70%',
						height: '70%',
						textAlign: 'center',
					},
				}}
			>
				<button
					className="left-align flex rounded-2xl border border-offwhite bg-green_dark1 px-6 py-3 text-[1rem] font-semibold text-offwhite"
					onClick={closeModal}
				>
					Close
				</button>
				<h2
					className="my-4"
					style={{ color: '#FFF', fontSize: '24px', fontWeight: 700 }}
				>
					Order Fruits
				</h2>
				<p
					className="my-8"
					style={{ color: '#FFF', fontSize: '18px', marginBottom: '20px' }}
				>
					Enter the fruit's quantity that you choose to order.
				</p>
				<input
					type="text"
					className="bg-white my-10 h-[4.5rem] w-[8.5rem] rounded-[15px] text-center"
					placeholder="kilogram"
				/>
				<button
					className="rounded-2xl border border-offwhite bg-offwhite px-4 py-3 text-[1rem] font-semibold text-green_dark1 "
					style={{ display: 'flex', marginLeft: 'auto', marginTop: '6%' }}
					onClick={closeModal}
				>
					Confirm order
				</button>
				<div className="fixed left-[0rem] top-[21.5rem] w-[11rem]">
					<img src={Group} alt="" />
				</div>
				<div className="fixed left-[10rem] top-[18rem] w-[5rem]">
					<img src={Group2} alt="" />
				</div>
				<div className="fixed left-[50rem] top-[2rem] w-[4.5rem]">
					<img src={Vector} alt="" />
				</div>
				<div className="fixed left-[51.5rem] top-[5rem] w-[2rem]">
					<img src={Vector2} alt="" />
				</div>
				<div className="fixed left-[46rem] top-[10rem] w-[5rem]">
					<img src={Group3} alt="" />
				</div>
			</Modal>
		</div>
	)
}

export default ReOrder
