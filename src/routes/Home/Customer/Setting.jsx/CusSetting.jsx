const CusSetting = () => {
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
			<div className="mt-4 rounded-lg border border-grey_light1 px-12 py-4">
				<div className="flex items-center space-x-4">
					<img
						src="/src/assets/userAvtG.jpg"
						className="h-[4rem] w-[4rem] rounded-full"
						alt=""
					/>
					<div>
						<div className="text-[2rem] text-green_dark1">Nhat Minh</div>
						<span className="text-green_dark1">Customer</span>
					</div>
				</div>

				<div className="mt-4 grid grid-cols-2 gap-12">
					<div className="rounded-lg border border-grey_light1 px-8 py-4 shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)]">
						<div className="flex items-center space-x-4 text-green_dark1">
							<i className="fa fa-phone text-[2rem]"></i>
							<div>
								<div className="text-[1.5rem]">Phone</div>
								<span className="italic">Your current phone number :</span>
							</div>
						</div>

						<div className="my-4 text-center text-[1.2rem] font-light text-green_dark1">
							0938254478
						</div>
					</div>

					<div className="rounded-lg border border-grey_light1 px-8 py-4 shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)]">
						<div className="flex items-center space-x-4 text-green_dark1">
							<i className="fa fa-user-shield text-[2rem]"></i>

							<div>
								<div className="text-[1.5rem]">Phone</div>
								<span className="italic">Your current Admin ID :</span>
							</div>
						</div>

						<div className="my-4 text-center text-[1.2rem] font-light text-green_dark1">
							AID010203040506
						</div>
					</div>

					<div className="rounded-lg border border-grey_light1 px-8 py-4 shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)]">
						<div className="flex items-center space-x-4 text-green_dark1">
							<i className="fa fa-envelope text-[2rem]"></i>
							<div>
								<div className="text-[1.5rem]">Email</div>
								<span className="italic">Your current email number :</span>
							</div>
						</div>

						<div className="my-4 text-center text-[1.2rem] font-light text-green_dark1">
							Banhthinoi@Admin.com
						</div>
					</div>

					<div className="rounded-lg border border-grey_light1 px-8 py-4 shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)]">
						<div className="flex items-center space-x-4 text-green_dark1">
							<i className="fa fa-users-cog text-[2rem]"></i>
							<div>
								<div className="text-[1.5rem]">Phone</div>
								<span className="italic">Your current phone number :</span>
							</div>
						</div>

						<div className="my-4 text-center text-[1.2rem] font-light text-green_dark1">
							0938254478
						</div>
					</div>
				</div>

				<div className="my-8 flex justify-center space-x-8">
					<button className="rounded-lg border px-8 py-4 text-[1.25rem] font-bold text-green_dark1 hover:bg-green_dark1 hover:text-offwhite">
						Change Profile
					</button>
				</div>
			</div>
		</div>
	)
}

export default CusSetting
