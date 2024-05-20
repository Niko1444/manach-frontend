import { useNavigate } from 'react-router-dom'

const AHome = () => {
	const navigate = useNavigate()
	return (
		<div className="h-sreen m-8">
			<div>
				<div className="text-[1.625rem] font-extrabold text-green_dark1">
					Top Fruits
				</div>
				<span className="text-[1.125rem] font-light text-green">
					From top brands
				</span>
				<div className="mt-12 text-[1.5rem] font-semibold text-green_dark1">
					Hello admins, welcome to work!
				</div>
			</div>

			<div className="space-y-10 py-12">
				<div className="flex justify-center space-x-10">
					<button
						onClick={() => navigate('/admin/store')}
						className="h-[15.625rem] w-[29.125rem] rounded-2xl bg-green_dark1 px-12 text-left text-offwhite"
					>
						<span className="text-left text-[1.5rem] font-semibold">Store</span>
						<div className="mx-auto text-center text-[5rem]">
							<i className="fa fa-shopping-cart"></i>
						</div>
					</button>
					<button
						onClick={() => navigate('/admin/warehouse')}
						className="h-[15.625rem] w-[29.125rem] rounded-2xl bg-green_dark1 px-12 text-left text-offwhite"
					>
						<span className="text-left text-[1.5rem] font-semibold">
							Warehouse
						</span>
						<div className="mx-auto text-center text-[5rem]">
							<i className="fa fa-warehouse"></i>
						</div>
					</button>
				</div>
				<div className="flex justify-center space-x-10">
					<button
						onClick={() => navigate('/admin/dashboard')}
						className="h-[15.625rem] w-[29.125rem] rounded-2xl bg-green_dark1 px-12 text-left text-offwhite"
					>
						<span className="text-left text-[1.5rem] font-semibold">
							Dashboard
						</span>
						<div className="mx-auto text-center text-[5rem]">
							<i className="fa fa-tag"></i>
						</div>
					</button>
					<button
						onClick={() => navigate('/admin/setting')}
						className="h-[15.625rem] w-[29.125rem] rounded-2xl bg-green_dark1 px-12 text-left text-offwhite"
					>
						<span className="text-left text-[1.5rem] font-semibold">
							Setting
						</span>
						<div className="mx-auto text-center text-[5rem]">
							<i className="fa fa-cog"></i>
						</div>
					</button>
				</div>
			</div>
		</div>
	)
}

export default AHome
