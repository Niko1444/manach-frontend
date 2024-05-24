import { useState } from 'react'

import Table from './Table'

const AStore = () => {

	const [addPro, setAddPro] = useState(false)
	const [type, setType] = useState('all')

	return (
		<div className="h-screen w-full bg-[#F8F9FA]">
			<div className="p-8">
				{/* Title  */}
				<div>
					<div className="flex justify-between">
						<div
							className={`${!addPro ? 'block' : 'hidden'} text-[2.5rem] font-extrabold leading-[3.5rem] text-green_dark1`}
						>
							Store
						</div>
						<button
							onClick={() => setAddPro(!addPro)}
							className={`${addPro ? 'block' : 'hidden'} rounded-full bg-green_dark1 px-8 py-2 text-[1.5rem] text-offwhite`}
						>
							<i className="fa fa-arrow-left mr-4 "></i>
							<span>Back</span>
						</button>
					</div>
					<div className="mt-4 flex space-x-8 text-offwhite">
						<button
							onClick={() => setAddPro(!addPro)}
							className={`${!addPro ? 'block' : 'hidden'} rounded-xl border border-green_dark1 bg-green_dark1 px-4 py-2 hover:bg-offwhite hover:text-green_dark1`}
						>
							+ Add Product
						</button>
					</div>
				</div>

				{/* Content */}
				<div
					className={`${!addPro ? 'block' : 'hidden'} mt-8 space-y-8 rounded-lg bg-offwhite p-4`}
				>
					<div className="">
						<button
							className={`${type === 'all' ? 'border-green_dark1' : 'border-grey_light1'} border-b-2 p-4`}
							onClick={() => setType('all')}
						>
							All Product
						</button>
						<button
							className={`${type === 'unripe' ? 'border-green_dark1' : 'border-grey_light1'} border-b-2 p-4`}
							onClick={() => setType('unripe')}
						>
							Unripe
						</button>
						<button
							className={`${type === 'firm' ? 'border-green_dark1' : 'border-grey_light1'} border-b-2 p-4`}
							onClick={() => setType('firm')}
						>
							Firm
						</button>
						<button
							className={`${type === 'ripe' ? 'border-green_dark1' : 'border-grey_light1'} border-b-2 p-4`}
							onClick={() => setType('ripe')}
						>
							Ripe
						</button>
					</div>

					<Table type={type} />
				</div>

				<div
					className={`${addPro ? 'block' : 'hidden'} mt-8 space-y-8 rounded-lg bg-offwhite p-4`}
				>
					<div className="flex space-x-4">
						{/* Left  */}
						<div className="h-fit w-[30%] space-y-2 rounded-xl border border-grey_light1 p-4">
							{/* Title  */}
							<div className="text-[1.25rem] font-semibold text-green_dark1">
								Product Status
							</div>

							{/* Dropdown */}
							<div>
								<div className="dropdown dropdown-hover w-full">
									<div
										tabIndex={0}
										role="button"
										className="btn m-1 flex w-full justify-between text-left text-green_dark1"
									>
										<span>Active</span>
										<span>{'<>'}</span>
									</div>
									<ul
										tabIndex={0}
										className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
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

							<div className="space-y-4 py-4 text-green_dark1">
								<div className="text-[0.875rem] font-semibold text-green_dark1">
									Ripeness of the fruit
								</div>

								<div className="flex space-x-4 align-middle">
									<input
										type="checkbox"
										defaultChecked
										className="checkbox checkbox-md  "
									/>
									<span>Unripe</span>
								</div>

								<div className="flex space-x-4 align-middle">
									<input
										type="checkbox"
										defaultChecked
										className="checkbox checkbox-md checkbox-green_dark1"
									/>
									<span>Firm</span>
								</div>

								<div className="flex space-x-4 align-middle">
									<input
										type="checkbox"
										defaultChecked
										className="checkbox checkbox-md checkbox-green_dark1"
									/>
									<span>Ripe</span>
								</div>

								<div className="flex items-center space-x-4 text-redpink_dark">
									<div>
										<i className="fa fa-calendar"></i>
									</div>
									<span>
										Selections may vary depending on the ripeness of the fruit.
									</span>
								</div>
							</div>

							<hr />

							<div>
								<button className="w-full rounded-xl bg-green_dark1 py-4 text-offwhite">
									Save and publish
								</button>
							</div>
						</div>

						<div className="w-[70%] rounded-xl border border-grey_light1 p-4">
							<div className="flex items-center space-x-4 text-green_dark1">
								<span className="text-[1.25rem] font-bold">Product</span>
								<div className="text-[1.125rem]">
									<i className="fa fa-check-circle"></i>
								</div>
							</div>

							<div className="mt-12 flex space-x-8 px-8">
								<div className="w-[40%]">
									<span className="font-bold text-green_dark1">Image</span>
									<div className="mt-4 rounded-lg border">
										<img
											src="/src/assets/banana.png"
											className="mx-auto my-8 w-3/4"
											alt=""
										/>
										<input
											type="file"
											className="file-input file-input-bordered w-full"
										/>
									</div>
								</div>
								<div className="w-[60%] space-y-4">
									<div className="space-y-2">
										<span className="font-bold text-green_dark1">
											Product Name
										</span>
										<input
											type="text"
											placeholder="Banana"
											className="input input-bordered input-md w-full"
										/>
									</div>
									<div className="space-y-2">
										<span className="font-bold text-green_dark1">
											Condition{' '}
										</span>
										<input
											type="text"
											placeholder="Ripe"
											className="input input-bordered input-md w-full"
										/>
									</div>
									<div className="space-y-2">
										<span className="font-bold text-green_dark1">Price</span>
										<br />
										<input
											type="text"
											placeholder="$15"
											className="input input-bordered input-md w-full"
										/>
									</div>
									<div className="space-y-2">
										<span className="font-bold text-green_dark1">
											Product Category{' '}
										</span>
										<div className="dropdown dropdown-hover w-full">
											<div
												tabIndex={0}
												role="button"
												className="btn m-1 flex w-full justify-between text-left text-green_dark1"
											>
												<span>Select category</span>
												<span>{'<>'}</span>
											</div>
											<ul
												tabIndex={0}
												className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
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
								</div>
							</div>

							<div className="mt-12 space-y-4 px-8">
								<span className="font-bold text-green_dark1">Description</span>
								<br />
								<textarea
									className="textarea textarea-bordered h-[17rem] w-full"
									placeholder="Write something to describe your product..."
								></textarea>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)

	return <div>
		
	</div>

}

export default AStore
