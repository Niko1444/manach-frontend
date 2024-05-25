import React, { useState } from 'react'
import Modal from 'react-modal'
import durian from '../../../../../assets/monthong durian 1.png'
import strawberry from '../../../../../assets/strawberry.png'
import raspberry from '../../../../../assets/raspberry.png'
import coconut from '../../../../../assets/coconut.png'
import AddToShelf from '../../../../../components/AddToShelf/AddToShelf'
import Group from '../../../../../assets/Group.svg'
import Group2 from '../../../../../assets/Group2.svg'
import Vector from '../../../../../assets/Vector.svg'
import Vector2 from '../../../../../assets/Vector2.svg'
import Group3 from '../../../../../assets/Group3.svg'
Modal.setAppElement('#root') // Add this line for accessibility

const StockAdjustment = () => {
	const [showProductList, setShowProductList] = useState(true)
	const [isModalOpen, setIsModalOpen] = useState(false)

	const tableStyle = {
		width: 'auto',
		borderCollapse: 'collapse',
		textAlign: 'center',
		maxWidth: '91.5%',
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
			<div>
				<div
					className="relative h-[156px] w-[978px]"
					style={{ margin: '30px' }}
				>
					<div
						className="absolute left-0 top-0 h-[156px] w-[978px] border"
						style={{ color: '#485935' }}
					/>
					<div className="absolute left-[12px] top-[63px] h-20 w-[215px]">
						<div
							className="absolute left-0 top-0 h-20 w-[215px] border"
							style={{ color: '#485935' }}
						/>
						<div
							className="text-xl absolute left-[13px] top-[10px] text-center font-['Poppins']"
							style={{ color: '#485935', fontWeight: 400 }}
						>
							Total Products
						</div>
						<div
							className="text-xl absolute left-[70px] top-[40px] text-center font-['Poppins']"
							style={{ color: '#485935', fontWeight: 700 }}
						>
							1234 kg
						</div>
					</div>
					<div className="absolute left-[257px] top-[63px] h-20 w-[215px]">
						<div
							className="absolute left-0 top-0 h-20 w-[215px] border"
							style={{ color: '#485935' }}
						/>
						<div
							className="text-xl absolute left-[15px] top-[10px] text-center font-['Poppins']"
							style={{ color: '#485935', fontWeight: 400 }}
						>
							Low-stock alerts
						</div>
						<div
							className="text-xl absolute left-[52px] top-[40px] text-center font-['Poppins']"
							style={{ color: '#485935', fontWeight: 700 }}
						>
							5 products
						</div>
					</div>
					<div className="absolute left-[506px] top-[63px] h-20 w-[215px]">
						<div
							className="absolute left-0 top-0 h-20 w-[215px] border"
							style={{ color: '#485935' }}
						/>
						<div
							className="text-xl absolute left-[12px] top-[10px] text-center font-['Poppins']"
							style={{ color: '#485935', fontWeight: 400 }}
						>
							Total Products
						</div>
						<div
							className="text-xl absolute left-[57px] top-[40px] text-center font-['Poppins']"
							style={{ color: '#485935', fontWeight: 700 }}
						>
							0 product
						</div>
					</div>
					<div className="absolute left-[751px] top-[63px] h-20 w-[215px]">
						<div
							className="absolute left-0 top-0 h-20 w-[215px] border"
							style={{ color: '#485935' }}
						/>
						<div
							className="text-xl absolute left-[73px] top-[40px] text-center font-['Poppins']"
							style={{ color: '#485935', fontWeight: 700 }}
						>
							634 kg
						</div>
						<div
							className="text-xl absolute left-[15px] top-[10px] text-center font-['Poppins']"
							style={{ color: '#485935', fontWeight: 400 }}
						>
							Low-stock alerts
						</div>
					</div>
					<div
						className="absolute left-[489px] top-0 h-[0px] w-[156px] origin-top-left rotate-90"
						style={{ border: '0.5px solid #485935' }}
					></div>
					<div
						className="text-lg absolute left-[12px] top-[15px] text-center font-['Poppins']"
						style={{ color: '#485935', fontWeight: 100 }}
					>
						Warehouse Summary
					</div>
					<div
						className="text-lg absolute left-[506px] top-[15px] text-center font-['Poppins']"
						style={{ color: '#485935', fontWeight: 100 }}
					>
						Shelf Summary
					</div>
				</div>
			</div>

			<div className="my-8 mr-24 flex items-center justify-between">
				<div
					className="text-stone-700 text-4xl h-[65px] w-[273px] font-['Poppins']"
					style={{ color: '#485935', fontSize: '36px', fontWeight: 700 }}
				>
					Shelf-display
				</div>
				<button
					className="rounded-2xl bg-green_dark1 px-6 py-4 text-[1.5rem] font-semibold text-offwhite"
					onClick={openModal}
				>
					Add item (s) to shelf
				</button>
			</div>

			{showProductList && (
				<table style={tableStyle}>
					<thead>
						<tr>
							<th style={{ ...thStyle, width: '8%' }}></th>
							<th style={{ ...thStyle, ...innerBorderStyle, width: '18%' }}>
								Name
							</th>
							<th style={{ ...thStyle, ...innerBorderStyle, width: '20%' }}>
								Quantity in Warehouse
							</th>
							<th style={{ ...thStyle, ...innerBorderStyle, width: '18%' }}>
								Quantity Displayed
							</th>
							<th style={{ ...thStyle, ...innerBorderStyle, width: '12%' }}>
								Add to shelf
							</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td style={tdStyle}>
								<img src={durian} style={{ maxWidth: '100%' }} />
							</td>
							<td style={{ ...tdStyle, ...innerBorderStyle }}>
								Vietnamese Durian
							</td>
							<td style={{ ...tdStyle, ...innerBorderStyle }}>6</td>
							<td style={{ ...tdStyle, ...innerBorderStyle }}>3</td>
							<td style={{ ...tdStyle, ...innerBorderStyle }}>
								<AddToShelf />
							</td>
						</tr>
						<tr>
							<td style={tdStyle}>
								<img src={strawberry} style={{ maxWidth: '100%' }} />
							</td>
							<td style={{ ...tdStyle, ...innerBorderStyle }}>Strawberry</td>
							<td style={{ ...tdStyle, ...innerBorderStyle }}>3</td>
							<td style={{ ...tdStyle, ...innerBorderStyle }}>3</td>
							<td style={{ ...tdStyle, ...innerBorderStyle }}>
								<AddToShelf />
							</td>
						</tr>
						<tr>
							<td style={tdStyle}>
								<img src={raspberry} style={{ maxWidth: '100%' }} />
							</td>
							<td style={{ ...tdStyle, ...innerBorderStyle }}>Raspberry</td>
							<td style={{ ...tdStyle, ...innerBorderStyle }}>10</td>
							<td style={{ ...tdStyle, ...innerBorderStyle }}>7</td>
							<td style={{ ...tdStyle, ...innerBorderStyle }}>
								<AddToShelf />
							</td>
						</tr>
						<tr>
							<td style={tdStyle}>
								<img src={coconut} style={{ maxWidth: '100%' }} />
							</td>
							<td style={{ ...tdStyle, ...innerBorderStyle }}>
								Green Siamese Coconut
							</td>
							<td style={{ ...tdStyle, ...innerBorderStyle }}>5</td>
							<td style={{ ...tdStyle, ...innerBorderStyle }}>7</td>
							<td style={{ ...tdStyle, ...innerBorderStyle }}>
								<AddToShelf />
							</td>
						</tr>
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
						width: '60%',
						height: '60%',
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
					style={{ display: 'flex', marginLeft: 'auto', marginTop: '6%'}}
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

export default StockAdjustment
