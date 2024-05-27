const CusCheckOut = () => {
	const handleChangeQuantity = () => {
		return (
			<div role="alert" className="alert alert-error">
				<span>Error! Task failed successfully.</span>
			</div>
		)
	}

	const fetchData = () => {
		if (!data || data.length === 0) {
			return (
				<tr>
					<td colSpan="4" className="py-4 text-center">
						You dont have any products in your cart.
					</td>
				</tr>
			)
		}

		return data?.map((item, index) => {
			return (
				<tr key={index} className="border-b-[1px] border-green">
					<td className="py-4 pl-4 text-left">
						<div className="flex space-x-4">
							<img src={`${item.img}`} className="h-[3rem] w-[3rem]" alt="" />
							<div>
								<div>{item.name}</div>
								<span>({item.status})</span>
							</div>
						</div>
					</td>
					<td>
						<div className="flex justify-center space-x-4">
							<button
								className="rounded-full border px-2"
								onClick={() => {
									handleChangeQuantity()
								}}
							>
								-
							</button>
							<div>{item.quantity}</div>
							<button className="rounded-full border px-1.5">+</button>
						</div>
					</td>
					<td>$ {item.price}</td>
					<td>${item.quantity * item.price}</td>
				</tr>
			)
		})
	}
	const calTotalCost = () => {
		let sum = 0
		for (let i = 0; i < data.length; i++) {
			sum += data[i].price * data[i].quantity
		}
		return sum
	}
	const showListCart = () => {
		return data.map((item) => {
			return (
				<div key={item.id} className="my-8 flex justify-between">
					<div>Item {item.id}</div>
					<div>${item.price}</div>
					<div>{item.quantity}</div>
				</div>
			)
		})
	}

	return (
		<div className="m-8">
			{/* Title */}
			<div className="flex justify-between align-middle">
				<div className="text-[2.5rem] font-extrabold leading-[3.5rem] text-green_dark1">
					Checkout
				</div>
				<div>
					<label className="input input-bordered flex items-center gap-2 rounded-xl bg-green_light3 px-4 py-2">
						<input
							type="text"
							className="grow bg-green_light3 text-green placeholder-green"
							placeholder="Search here"
						/>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							className="h-4 w-4 opacity-70"
						>
							<path
								fillRule="evenodd"
								d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
								clipRule="evenodd"
							/>
						</svg>
					</label>
				</div>
			</div>
			<div className="text-[1.5rem] font-[275] leading-[3.5rem] text-green_dark1">
				This is your shopping cart.
			</div>

			{/* Content  */}
			<div className="mt-12 flex h-fit rounded-lg border border-grey_light1">
				{/* List of product  */}
				<div className="mx-12 my-8 w-[70%]">
					<div className="flex justify-between text-[1.625rem] text-green_dark1">
						<div className="font-semibold">Your Cart</div>
						<div>10 item</div>
					</div>
					<hr />
					<div className="mt-8">
						<div className="overflow-x-auto">
							<table className="table w-full text-center">
								{/* head */}
								<thead>
									<tr className="text-center text-[1.25rem] font-normal text-green_dark1">
										<th className="p-4 text-left">Product Name</th>
										<th>Quantity (kg)</th>
										<th>Price</th>
										<th>Total</th>
									</tr>
								</thead>
								<tbody className="mx-2 w-full space-y-8 bg-green_dark1 px-2 text-offwhite">
									{fetchData()}
								</tbody>
							</table>
						</div>
					</div>
				</div>

				{/* Order Sumary */}
				<div className="h-fit w-[30%] rounded-lg bg-grey_light1">
					<div className="m-4 text-green_dark1">
						<div className="text-[1.5rem] font-semibold">Order Summary</div>
						<hr />
						<div>
							<div className="my-8 flex justify-between">
								<div>Item</div>
								<div>Price</div>
								<div>Quantity</div>
							</div>
							{showListCart()}
						</div>

						<hr className="my-4" />

						<div className="flex justify-between">
							<div>Total Cost</div>
							<span>${calTotalCost()}</span>
						</div>

						<div className="mt-4 text-center">
							<button className="rounded-lg bg-green_dark1 px-4 py-2 text-offwhite">
								Checkout
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const data = [
	{
		id: 1123,
		img: '/src/assets/banana.png',
		name: 'banana',
		status: 'unfirm',
		quantity: 4,
		price: 5,
		instock: 12,
	},
	{
		id: 1423,
		img: '/src/assets/coconut.png',
		name: 'coconut',
		status: 'firm',
		quantity: 7,
		price: 7,
		instock: 15,
	},
	{
		id: 1231,
		img: '/src/assets/strawberry.png',
		name: 'strawberry',
		status: 'firm',
		quantity: 12,
		price: 9,
		instock: 27,
	},
	{
		id: 4122,
		img: '/src/assets/raspberry.png',
		name: 'raspberry',
		status: 'firm',
		quantity: 4,
		price: 11,
		instock: 12,
	},
	{
		id: 3123,
		img: '/src/assets/saurieng.png',
		name: 'durian',
		status: 'firm',
		quantity: 1,
		price: 3,
		instock: 11,
	},
]
// const data = []

export default CusCheckOut
