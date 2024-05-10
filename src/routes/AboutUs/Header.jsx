import { NavLink } from 'react-router-dom'

const Header = () => {
	return (
		<div className="container mx-auto ">
			<div
				className=""
				style={{
					height: '9.25rem',
					background: 'var(--Green-dark1, #485935)',
				}}
			>
				<div className="item-center flex h-full w-full justify-between px-8">
					<div
						className="flex items-center
                "
					>
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width={106}
								height={104}
								viewBox="0 0 106 104"
								fill="none"
								className="relative"
							>
								<g filter="url(#filter0_d_652_2924)">
									<ellipse
										cx={53}
										cy={48}
										rx={49}
										ry={48}
										fill="white"
										className="relative"
									/>
								</g>
								<defs>
									<filter
										id="filter0_d_652_2924"
										x={0}
										y={0}
										width={106}
										height={104}
										filterUnits="userSpaceOnUse"
										colorInterpolationFilters="sRGB"
									>
										<feFlood floodOpacity={0} result="BackgroundImageFix" />
										<feColorMatrix
											in="SourceAlpha"
											type="matrix"
											values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
											result="hardAlpha"
										/>
										<feOffset dy={4} />
										<feGaussianBlur stdDeviation={2} />
										<feComposite in2="hardAlpha" operator="out" />
										<feColorMatrix
											type="matrix"
											values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
										/>
										<feBlend
											mode="normal"
											in2="BackgroundImageFix"
											result="effect1_dropShadow_652_2924"
										/>
										<feBlend
											mode="normal"
											in="SourceGraphic"
											in2="effect1_dropShadow_652_2924"
											result="shape"
										/>
									</filter>
								</defs>
							</svg>
							<img
								className="absolute left-6 top-4"
								style={{
									height: '7.4375rem',
									width: '7.4375rem',
								}}
								src="/src/assets/sumbol.png"
								alt=""
							/>
						</div>

						<span className="mx-4 text-[3rem] font-extrabold text-[white]">
							Manach
						</span>
					</div>

					<div
						className="flex items-center space-x-4"
						style={{
							color: 'var(--Green-light3, #ECF5E1)',
							fontSize: '1.5rem',
							fontWeight: 500,
							textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
						}}
					>
						<NavLink>Sign up</NavLink>
						<NavLink>Log In</NavLink>
						<NavLink>Our Store</NavLink>
						<NavLink>Contact Us</NavLink>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
