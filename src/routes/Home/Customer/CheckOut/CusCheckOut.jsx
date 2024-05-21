import { useState } from 'react'

const CusCheckOut = () => {
	const [act, setAct] = useState(false)

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
						<div>{item.name}</div>
						<span>({item.status})</span>
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
						<div className="my-8 flex justify-between">
							<div>Item 11</div>
							<div>$198</div>
						</div>

						<div>
							<label htmlFor="">Shipping</label>
							<div className="dropdown dropdown-end rounded-xl bg-offwhite">
								<div
									role="button"
									className="btn m-1 mx-2 w-full py-4 text-green"
									onClick={() => setAct(!act)}
								>
									Click
								</div>
								<ul
									className={`dropdown-content menu bg-base-100 z-[1] w-full p-2 shadow ${act ? 'block' : 'hidden'} }`}
								>
									<li>
										<a>Item 1</a>
									</li>
									<li>
										<a>Item 2</a>
									</li>
								</ul>
							</div>
						</div>

						<div className="mt-8 space-y-4">
							<label className="input input-bordered rounded-xl">
								<span>Promote Code</span>
								<input
									type="text"
									className="w-full  rounded-lg py-4 text-green placeholder-green"
									placeholder=" Enter Code"
								/>
							</label>
							<button className="rounded-lg border border-green_dark1 px-4 py-2 hover:bg-green_dark1 hover:text-offwhite">
								<span className="text-[1.25rem] font-bold ">Apply</span>
							</button>
						</div>
						<hr className="my-4" />

						<div className="flex justify-between">
							<div>Total Cost</div>
							<span>$198</span>
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
		img: 'fetch img',
		name: 'banana',
		status: 'firm',
		quantity: 2,
		price: 5,
		instock: 12,
	},
	{
		img: 'fetch img',
		name: 'banana',
		status: 'firm',
		quantity: 2,
		price: 5,
		instock: 12,
	},
	{
		img: 'fetch img',
		name: 'banana',
		status: 'firm',
		quantity: 2,
		price: 5,
		instock: 12,
	},
	{
		img: 'fetch img',
		name: 'banana',
		status: 'firm',
		quantity: 2,
		price: 5,
		instock: 12,
	},
	{
		img: 'fetch img',
		name: 'banana',
		status: 'firm',
		quantity: 2,
		price: 5,
		instock: 12,
	},
	{
		img: 'fetch img',
		name: 'banana',
		status: 'firm',
		quantity: 2,
		price: 5,
		instock: 12,
	},
	{
		img: 'fetch img',
		name: 'banana',
		status: 'firm',
		quantity: 2,
		price: 5,
		instock: 12,
	},
	{
		img: 'fetch img',
		name: 'banana',
		status: 'firm',
		quantity: 2,
		price: 5,
		instock: 12,
	},
	{
		img: 'fetch img',
		name: 'banana',
		status: 'firm',
		quantity: 2,
		price: 5,
		instock: 12,
	},
	{
		img: 'fetch img',
		name: 'banana',
		status: 'firm',
		quantity: 2,
		price: 5,
		instock: 12,
	},
	{
		img: 'fetch img',
		name: 'banana',
		status: 'firm',
		quantity: 2,
		price: 5,
		instock: 12,
	},
]
// const data = []

export default CusCheckOut
