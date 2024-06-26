import { useState } from 'react';
import TopFruitExplore from '../../components/ExploreFruit/TopFruitExplore';
import ExplorePopularFruits from '../../assets/ExplorePopularFruits.png'

const ExploreFruit = () => {
	const [state, setState] = useState({});
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleButtonClick = () => {
		setState({ boxShadow: '10px 10px 0px 0px rgba(0,0,0,0.25) inset' });
		setIsModalOpen(true);

		// After 200ms, reset the box shadow to none
		setTimeout(() => {
			setState({ boxShadow: '' });
		}, 200);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div className={isModalOpen ? 'modal-open' : ''}>
			<div
				className="relative h-[19.3125rem] w-[15.5rem] rounded-xl"
				onClick={handleButtonClick}
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
								Explore popular fruits
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
											src={ExplorePopularFruits}
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

			{/* Modal */}
			{isModalOpen && (
				<div className="fixed inset-0 z-50 flex items-center justify-center">
					{/* Modal Backdrop */}
					<div className="fixed inset-0 bg-black opacity-50"></div>

					{/* Modal Content */}
					<div className="relative bg-white p-4 rounded-lg z-10 shadow-lg">
						<div>
							<TopFruitExplore onClose={closeModal} />
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ExploreFruit;
