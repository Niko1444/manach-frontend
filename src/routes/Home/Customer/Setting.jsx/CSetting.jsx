const CSetting = () => {
	return (
		<div className="m-8">
			{/* Title */}
			<div className="flex justify-between align-middle">
				<div className="text-[1.5rem] font-extrabold leading-[3.5rem] text-green_dark1">
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

			{/* Body  */}
			<div></div>
		</div>
	)
}

export default CSetting
