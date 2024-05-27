// eslint-disable-next-line no-unused-vars
import React, { useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import ErrorReport from '../LogIn/ErrorReport'
import YesPleasecheck from '../LogIn/YesPleasecheck'

const NeedHelps = () => {
	const [state, setState] = useState({})
	const dialogRef = useRef(null)

	const handleClick = () => {
		dialogRef.current.showModal()
		setState({ boxShadow: '10px 10px 4px 0 rgba(0, 0, 0, 0.25) inset' })
		setTimeout(() => {
			setState({ boxShadow: '' })
		}, 200)
	}

	const handleClose = () => {
		dialogRef.current.close()
	}

	return (
		<div className="w-full p-2">
			<div className="relative mx-auto h-[12.0625rem] w-[14.5625rem]">
				{/* background */}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="233"
					height="193"
					viewBox="0 0 233 193"
					fill="#93A267"
					className={`rounded-[15px] bg-offwhite`}
				>
					<path
						d="M6.52457 -8.02695L39.6418 -9.97005C64.8458 -11.4489 72.6534 23.5386 49.2118 32.9153C40.164 36.5344 34.5225 45.6183 35.2894 55.3328L35.9609 63.8379C37.6975 85.8354 14.3251 100.976 -5.04024 90.3982C-13.9548 85.5289 -19.5 76.1815 -19.5 66.0238V19.5693C-19.5 4.93102 -8.08859 -7.16955 6.52457 -8.02695Z"
						fill="#93A267"
					/>
					<path
						d="M250.098 148.464L247.261 142.447C238.173 123.165 209.085 131.443 211.51 152.621L212.079 157.589C212.88 164.587 208.147 171.018 201.228 172.334C185.19 175.383 187.416 199 203.741 199H235.551C244.635 199 252 191.635 252 182.551V156.962C252 154.024 251.35 151.122 250.098 148.464Z"
						fill="#93A267"
					/>
				</svg>
				<NavLink
					className="absolute top-0 flex h-full w-full items-center justify-center rounded-[15px] transition duration-150 ease-in-out hover:shadow-[10px_10px_4px_0px_rgba(0,0,0,0.25)]"
					style={state}
					onClick={handleClick}
				>
					{/* content */}
					<div className="w-[12.75rem]">
						{/* btn + */}
						<div className="mx-auto flex h-full items-center justify-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="53"
								height="52"
								viewBox="0 0 53 52"
								fill="none"
								className=""
							>
								<g filter="url(#filter0_d_105_577)">
									<path
										d="M48.9714 22C48.9714 34.1503 39.1216 44 26.9714 44C14.8211 44 4.97136 34.1503 4.97136 22C4.97136 9.84974 14.8211 0 26.9714 0C39.1216 0 48.9714 9.84974 48.9714 22Z"
										fill="#485935"
									/>
									<path
										d="M45.4714 22C45.4714 32.2173 37.1886 40.5 26.9714 40.5C16.7541 40.5 8.47136 32.2173 8.47136 22C8.47136 11.7827 16.7541 3.5 26.9714 3.5C37.1886 3.5 45.4714 11.7827 45.4714 22Z"
										stroke="#93A268"
										strokeWidth="7"
									/>
								</g>
								<defs>
									<filter
										id="filter0_d_105_577"
										x="0.971359"
										y="0"
										width="52"
										height="52"
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
											values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
										/>
										<feBlend
											mode="normal"
											in2="BackgroundImageFix"
											result="effect1_dropShadow_105_577"
										/>
										<feBlend
											mode="normal"
											in="SourceGraphic"
											in2="effect1_dropShadow_105_577"
											result="shape"
										/>
									</filter>
								</defs>
							</svg>

							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="25"
								height="6"
								viewBox="0 0 25 6"
								fill="none"
								className="absolute mb-2"
							>
								<path
									d="M3 3L22 3"
									stroke="white"
									strokeWidth="5"
									strokeLinecap="round"
								/>
							</svg>

							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="6"
								height="25"
								viewBox="0 0 6 25"
								fill="none"
								className="absolute mb-2"
							>
								<path
									d="M3 3L3 22"
									stroke="white"
									strokeWidth="5"
									strokeLinecap="round"
								/>
							</svg>
						</div>

						{/* text */}
						<div
							style={{
								color: '#000',
								textAlign: 'center',
								fontSize: '1.625rem',
								fontFamily: 'Poppins',
								fontStyle: 'normal',
								fontWeight: 500,
								lineHeight: 'normal',
							}}
						>
							Need Help
						</div>
						<div
							style={{
								color: 'var(--Grey-dark1, #9C9C9C)',
								textAlign: 'center',
								fontFamily: 'Poppins',
								fontSize: '0.75rem',
								fontStyle: 'normal',
								fontWeight: 500,
								lineHeight: 'normal',
							}}
						>
							If you have any complaints click here and let us know.
						</div>
					</div>
				</NavLink>
			</div>
			<dialog ref={dialogRef} className="rounded-lg p-6 shadow-lg">
				<ErrorReport handleClose={handleClose}/>
			</dialog>
		</div>
	)
}

export default NeedHelps
