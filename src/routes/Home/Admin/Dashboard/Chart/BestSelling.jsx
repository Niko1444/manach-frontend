const BestSelling = ({ bestSellingProducts }) => {
	return (
		<div className="relative rounded-xl border p-2">
			<div className="absolute leading-3">
				<i className="fa fa-circle rounded-full border border-green_dark1 text-[0.8rem] text-offwhite"></i>
			</div>
			<div className="space-y-4 px-3 py-2">
				<div className=" text-center text-[0.875rem] font-semibold text-green_dark2">
					Best-selling Products
				</div>
				<div className="space-y-4 text-green_dark1">
					<div className="flex space-x-2 rounded-xl bg-green_light2 p-2">
						<div className="w-[25%]">
							<img
								src="/src/assets/strawberry.png"
								className="h-[2.25rem] w-[2.3125rem]"
								alt=""
							/>
						</div>
						<div className="w-[75%] text-[0.625rem]">
							<span className="font-semibold">Strawberry</span>
							<div className="flex items-center justify-between">
								<span>Order: +1234</span>
								<span>Stock: 2</span>
							</div>
						</div>
					</div>
					<div className="flex space-x-2 rounded-xl bg-green_light2 p-2">
						<img
							src="/src/assets/banana.png"
							className="h-[2.25rem] w-[2.3125rem]"
							alt=""
						/>
						<div className="w-[75%] text-[0.625rem]">
							<span className="font-semibold">Cavendish Banana</span>
							<div className="flex justify-between">
								<span>Order: +1399</span>
								<span>Stock: 7</span>
							</div>
						</div>
					</div>
					<div className="flex space-x-2 rounded-xl bg-green_light2 p-2">
						<img
							src="/src/assets/coconut.png"
							className="h-[2.25rem] w-[2.3125rem]"
							alt=""
						/>
						<div className="w-[75%] text-[0.625rem]">
							<span className="font-semibold">Coconut</span>
							<div className="flex items-center justify-between">
								<span>Order: +51232</span>
								<span>Stock: 12</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BestSelling
