const WasteProduct = () => {
	return (
		<div className="relative rounded-xl border p-2">
			<div className="absolute leading-3">
				<i className="fa fa-circle rounded-full border border-green_dark1 text-[0.8rem] text-offwhite"></i>
			</div>

			<div className="px-4 py-2">
				<div className="flex items-center space-x-2">
					<div className="border-redpink_light1 bg-redpink_light2 rounded-full border p-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								d="M4 7H20M10 11V17M14 11V17M5 7L6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19L19 7M9 7V4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4V7"
								stroke="#F07167"
								strokeWidth={2}
								strokeLinecap="round"
								strokeLinejoin="round"
							></path>
						</svg>
					</div>
					<div className="text-[0.875rem] text-green_dark1">Waste Products</div>
				</div>
				<div className="text-center text-[1.25rem] font-semibold text-green_dark1">
					8 kg
				</div>
				<div className="flex items-center space-x-2">
					<div className="bg-yellow_light1 text-yellow_dark1 flex items-center space-x-1 rounded-full px-3 py-1">
						<i className="fa fa-arrow-down h-4 w-4"></i>
						<span className="text-[0.75rem]">5%</span>
					</div>
					<div className="text-[0.75rem] text-green_dark1">( in 7 days )</div>
				</div>
			</div>
		</div>
	)
}

export default WasteProduct
