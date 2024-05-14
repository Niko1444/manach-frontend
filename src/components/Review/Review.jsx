import React from 'react'
import { useState } from 'react'

const Review = () => {
	const [state, setState] = useState({})
	return (
		<div
			className="w-[733px] h-[313px] relative"
			onClick={() => {
				setState({ boxShadow: '10px 10px 0px 0px rgba(0,0,0,0.25) inset' })

				// After 1 second, reset the box shadow to none
				setTimeout(() => {
					setState({ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' })
				}, 200)
			}}
		>
			<button
				className="absolute h-full w-full rounded-lg bg-none hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,0.25)]"
				style={state}
			>
				{/* content */}
				<div className="left-0 top-0 h-full w-full rounded-sm">
					{/* content  */}
					<div className="mt-8 h-full w-full">
						{/* text */}
						<div
							className="mb-[0.87rem]"
							style={{
								color: '#485935',
                                fontFamily: 'Poppins',
                                fontSize: '22px',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                lineHeight: 'normal',
							}}
						>
							Explore popular fruits
						</div>

						{/* image  */}
						<div>
							<div className="ml-auto h-fit w-full">
							<img
								src="/src/assets/banana.png"
								alt=""
								style={{
									background: 'url(<path-to-image>) lightgray 50% / cover no-repeat',
                                    boxShadow: '0px 6px 4px 0px rgba(0, 0, 0, 0.25)',
								}}
								className="mx-auto h-[7.0625rem] w-[10.5625rem]"
								/>
							</div>
						</div>

						<div className="mx-auto my-4 h-[0.0625rem] w-[13.3125rem] bg-green_dark1"></div>

						<div className="mx-auto text-center">
							<div className="flex items-center justify-center">
								<span className="mr-1">See all</span>
								<div className="flex align-middle">
									<div className="my-auto h-[0.125rem] w-[1.875rem] bg-green_dark1"></div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="7"
										height="12"
										viewBox="0 0 7 12"
										fill="none"
										className="-mx-1.5"
									>
										<path
											d="M1.49993 0.999956L5 6L1.50001 11"
											stroke="#485935"
											strokeWidth="2"
										/>
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* content */}
			</button>
		</div>
	)
}

export default Review
