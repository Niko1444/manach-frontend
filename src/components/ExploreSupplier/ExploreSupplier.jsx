// import React from 'react'
// https://svcy3.myclass.vn/images/adidas-prophere.png

import { useState } from 'react'

const ExploreSupplier = () => {
	const [state, setState] = useState({})
	return (
		<div
			className="relative h-[19.3125rem] w-[15.5rem] rounded-xl "
			onClick={() => {
				setState({ boxShadow: '10px 10px 0px 0px rgba(0,0,0,0.25) inset' })

				// After 1 second, reset the box shadow to none
				setTimeout(() => {
					setState({ boxShadow: '' })
				}, 200)
			}}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="256"
				height="317"
				viewBox="0 0 256 317"
				fill="none"
				className="rounded-md"
				style={{
					fill: 'var(--Offwhite, #FFF)',
				}}
			>
				<g filter="url(#filter0_d_161_246)">
					<path
						d="M4 10C4 4.47715 8.47715 0 14 0H242C247.523 0 252 4.47715 252 10V299C252 304.523 247.523 309 242 309H14C8.47716 309 4 304.523 4 299V10Z"
						fill="white"
					/>
				</g>
				<defs>
					<filter
						id="filter0_d_161_246"
						x="0"
						y="0"
						width="256"
						height="317"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dy="4" />
						<feGaussianBlur stdDeviation="2" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0.759096 0 0 0 0 0.787457 0 0 0 0 0.6759 0 0 0 1 0"
						/>
						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow_161_246"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_dropShadow_161_246"
							result="shape"
						/>
					</filter>
				</defs>
			</svg>
			<button
				className="absolute bottom-0 left-0.5 h-full w-full rounded-lg bg-none hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,0.25)]"
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
								color: 'var(--Green-dark1, #485935)',
								fontFamily: 'Poppins',
								fontSize: '1.25rem',
								fontStyle: 'normal',
								fontWeight: 500,
								lineHeight: 'normal',
							}}
						>
							Explore new Suppliers
						</div>

						{/* image  */}
						<div className="w-full text-center">
							<div
								className="mx-auto flex h-[9.3125rem] w-[11.5625rem] align-middle"
								style={{
									borderRadius: '0.625rem',
									background: 'var(--Green-light2, #CADBB7)',
									boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
								}}
							>
								<div className="my-auto h-fit w-full">
									<img
								src='https://s3-alpha-sig.figma.com/img/0b06/35c9/8600481e828a840058b9c62166c65490?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q52PvEXcH07YzTxc0VX~Mg9Btgit4vsGaYVRAfmYLZMhMrju1wCrEJ6dvWEv0DDK4gMgv4-nETpaF1kUzSuaRJ7V5CP6U9xLtV1NUwdH5rVJld2oPZ3dWuT9TbpsEn8u-z2dHjy5RBb80rnh2bjUwuKm1KhwgZea6uiDtEPMtXzu6qhnbjB1a5CYD7e-GDwSnrPfGi8qAmxz~QE6U2T~qbtowuCZ9NalszHD0cAdNaeTiGQYda2TZuoDYUBl33fzjWEc~EDUBGEbtlvmAW5ubR6w-cwqKnAZM1L2-ECSOYvG2XtVj4P8nxS4BoJFUbmfUCf48lIQsRZ6QoR6c9XY9A__'
										alt=""
										style={{
											background: 'lightgray 50% / cover no-repeat',
											boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
										}}
										className="mx-auto h-[7.0625rem] w-[10.5625rem]"
									/>
								</div>
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

export default ExploreSupplier
