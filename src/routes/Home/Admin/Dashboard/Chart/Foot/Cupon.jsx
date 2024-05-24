const Cupon = () => {
	return (
		<div className="relative h-full rounded-xl border p-2">
			<div className="absolute leading-3">
				<i className="fa fa-circle rounded-full border border-green_dark1 text-[0.8rem] text-offwhite"></i>
			</div>
			<div className="flex space-x-72 p-4 pb-0 text-green_dark1">
				<span className="flex text-[1.125rem] font-bold">Coupons</span>
				<div className="text-redpink text-[1.25rem] font-semibold">
					SALE OFF %
				</div>
			</div>

			<div className="flex justify-between p-4">
				<div className="flex w-[32%] justify-between rounded-lg bg-grey_light1 px-7 py-6 text-[1.125rem] text-green_dark1">
					<div className="font-bold">Strawbery</div>
					<span>5%</span>
				</div>
				<div className="flex w-[32%] justify-between rounded-lg bg-grey_light1 px-7 py-6 text-[1.125rem] text-green_dark1">
					<div className="font-bold">Strawbery</div>
					<span>5%</span>
				</div>
				<div className="flex w-[32%] justify-between rounded-lg bg-grey_light1 px-7 py-6 text-[1.125rem] text-green_dark1">
					<div className="font-bold">Strawbery</div>
					<span>5%</span>
				</div>
			</div>
		</div>
	)
}

export default Cupon
