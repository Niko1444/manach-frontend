const Total = ({ revenue, cost, orderVolume, productionVolume }) => {
	return (
		<div className="relative h-full rounded-xl border p-2">
			<div className="absolute leading-3">
				<i className="fa fa-circle rounded-full border border-green_dark1 text-[0.8rem] text-offwhite"></i>
			</div>
			<div className="relative rounded-xl p-6">
				<div className="space-y-8">
					{/* Top */}
					<div className="flex justify-between">
						<div className="h-[150px] w-[48%] rounded-lg border">
							<div className="flex justify-between px-6 pb-4 pt-8">
								<div className="flex space-x-8">
									<div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={56}
											height={56}
											viewBox="0 0 32 32"
											fill="none"
											className="w rounded-full border border-[#F8A58C] bg-[#F8A58C1A] p-2"
										>
											<path
												d="M16 4L16 28"
												stroke="#F8A58C"
												strokeWidth="1.92"
												strokeMiterlimit={10}
												strokeLinecap="square"
											/>
											<path
												d="M21.2001 7.19977C19.5262 6.63376 17.7667 6.36307 16.0001 6.39977C13.2401 6.39977 9.6001 7.59977 9.6001 10.7998C9.6001 16.7998 22.4001 14.0262 22.4001 20.3998C22.4001 23.5718 19.2561 24.7998 16.0001 24.7998C13.8057 24.859 11.624 24.4499 9.6001 23.5998"
												stroke="#F8A58C"
												strokeWidth="1.92"
												strokeMiterlimit={10}
												strokeLinecap="square"
											/>
										</svg>
									</div>

									<div className="text-green_dark1">
										<div className="text-[1rem]">Revenue</div>
										<span className="text-[1.5rem] font-semibold">
											${revenue}
										</span>
									</div>
								</div>

								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width={124}
										height={57}
										viewBox="0 0 124 57"
										fill="none"
									>
										<path
											d="M1.5 26.6613C1.5 26.6613 30.1385 60.4038 37.75 54.4549C53.1385 42.4278 47.5185 21.7116 60.5 18C70.5185 15.1356 81.4129 31.8974 95.25 38.0148C104.413 42.0657 123 2.5 123 2.5"
											stroke="#90BEF0"
											strokeWidth={2}
										/>
									</svg>
								</div>
							</div>

							<hr />
							<div className="px-6 py-2">
								<div className="flex items-center space-x-2">
									<div className="flex items-center space-x-1 rounded-full bg-green_bright2 px-3 py-1 text-green_bright1">
										<i className="fa fa-arrow-up h-4 w-4"></i>
										<span className="text-[0.75rem]">25%</span>
									</div>
									<div className="text-[0.75rem] text-green_dark1">
										Total revenue compared to 7 days ago
									</div>
								</div>
							</div>
						</div>

						<div className="h-[150px] w-[48%] rounded-lg border">
							<div className="flex justify-between px-6 pb-4 pt-8">
								<div className="flex space-x-8">
									<div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={56}
											height={56}
											viewBox="0 0 32 32"
											fill="none"
											className="w rounded-full border border-[#8353E2]
											bg-[#F5F2FD] p-2"
										>
											<path
												d="M25 21C24.9982 22.5907 24.3655 24.1158 23.2407 25.2407C22.1158 26.3655 20.5908 26.9982 19 27H17V29C17 29.2652 16.8946 29.5196 16.7071 29.7071C16.5196 29.8946 16.2652 30 16 30C15.7348 30 15.4804 29.8946 15.2929 29.7071C15.1054 29.5196 15 29.2652 15 29V27L13 27C11.4092 26.9982 9.88416 26.3655 8.75933 25.2407C7.6345 24.1158 7.00179 22.5907 7 21C7 20.7348 7.10536 20.4804 7.29289 20.2929C7.48043 20.1054 7.73478 20 8 20C8.26522 20 8.51957 20.1054 8.70711 20.2929C8.89464 20.4804 9 20.7348 9 21C9.0012 22.0605 9.42302 23.0772 10.1729 23.8271C10.9228 24.577 11.9395 24.9988 13 25L19 25C20.0609 25 21.0783 24.5786 21.8284 23.8284C22.5786 23.0783 23 22.0609 23 21C23 19.9391 22.5786 18.9217 21.8284 18.1716C21.0783 17.4214 20.0609 17 19 17L13.5 17C11.9087 17 10.3826 16.3679 9.25736 15.2426C8.13214 14.1174 7.5 12.5913 7.5 11C7.5 9.4087 8.13214 7.88258 9.25736 6.75736C10.3826 5.63214 11.9087 5 13.5 5H15V3C15 2.73478 15.1054 2.48043 15.2929 2.29289C15.4804 2.10536 15.7348 2 16 2C16.2652 2 16.5196 2.10536 16.7071 2.29289C16.8946 2.48043 17 2.73478 17 3V5H18C19.5908 5.00179 21.1158 5.6345 22.2407 6.75933C23.3655 7.88416 23.9982 9.40925 24 11C24 11.2652 23.8946 11.5196 23.7071 11.7071C23.5196 11.8946 23.2652 12 23 12C22.7348 12 22.4804 11.8946 22.2929 11.7071C22.1054 11.5196 22 11.2652 22 11C21.9988 9.9395 21.577 8.92279 20.8271 8.1729C20.0772 7.42302 19.0605 7.0012 18 7L13.5 7C12.4391 7 11.4217 7.42143 10.6716 8.17157C9.92143 8.92172 9.5 9.93913 9.5 11C9.5 12.0609 9.92143 13.0783 10.6716 13.8284C11.4217 14.5786 12.4391 15 13.5 15L19 15C20.5908 15.0018 22.1158 15.6345 23.2407 16.7593C24.3655 17.8842 24.9982 19.4093 25 21Z"
												fill="#8353E2"
											/>
										</svg>
									</div>

									<div className="text-green_dark1">
										<div className="text-[1rem]">Cost</div>
										<span className="text-[1.5rem] font-semibold">${cost}</span>
									</div>
								</div>

								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width={117}
										height={58}
										viewBox="0 0 117 58"
										fill="none"
									>
										<path
											d="M1 4.50212C1 4.50212 19.8449 -1.47027 29.75 2.49036C42.8449 7.72649 46.1096 25.4296 58.5 27.494C69.1096 29.2617 78.5211 7.59127 87.25 12.0705C101.521 19.3936 116 56.9999 116 56.9999"
											stroke="#F07167"
											strokeWidth={2}
										/>
									</svg>
								</div>
							</div>

							<hr />
							<div className="px-6 py-2">
								<div className="flex items-center space-x-2">
									<div className="flex items-center space-x-1 rounded-full bg-[#F0716733] px-3 py-1 text-[#F07167]">
										<i className="fa fa-arrow-down h-4 w-4"></i>
										<span className="text-[0.75rem]">15%</span>
									</div>
									<div className="text-[0.75rem] text-green_dark1">
										Total cost compared to 7 days ago
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Bottom */}
					<div className="flex justify-between">
						<div className="h-[150px] w-[48%] rounded-lg border">
							<div className="flex justify-between px-6 pb-4 pt-8">
								<div className="flex space-x-8">
									<div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={56}
											className="w rounded-full border border-[#C5D1F7] bg-[#F1F4FD] p-2"
											height={56}
											viewBox="0 0 32 32"
											fill="none"
										>
											<g opacity="0.2">
												<path
													d="M15.9858 28.8515C15.8134 28.8515 15.6439 28.8069 15.4938 28.7221L4.99378 22.7873C4.83962 22.7001 4.71135 22.5736 4.62211 22.4207C4.53287 22.2677 4.48584 22.0938 4.48584 21.9167L4.48584 10.0836C4.48581 9.90555 4.53336 9.73069 4.62359 9.57715L16.1186 16.0002L15.9858 28.8515Z"
													fill="#4069E5"
												/>
											</g>
											<path
												d="M28.2281 9.10415C28.2242 9.09689 28.2211 9.08938 28.2169 9.08212C28.2136 9.07626 28.2095 9.07101 28.2061 9.06527C28.0282 8.7641 27.7744 8.51487 27.47 8.34249L16.97 2.4078C16.6694 2.23904 16.3305 2.1504 15.9859 2.15039C15.6412 2.15038 15.3023 2.239 15.0017 2.40774L4.50159 8.34261C4.19214 8.51775 3.935 8.77227 3.75671 9.07992C3.75482 9.08321 3.75256 9.08614 3.75073 9.08944C3.7475 9.09524 3.74509 9.10128 3.74197 9.10714C3.57441 9.40537 3.48621 9.74162 3.48584 10.0837L3.48584 21.9167C3.48618 22.2708 3.58038 22.6185 3.75883 22.9244C3.93728 23.2303 4.19361 23.4834 4.50171 23.6579L15.0017 29.5926C15.2814 29.7498 15.5948 29.8374 15.9154 29.8478C15.9354 29.8492 15.9552 29.8512 15.9755 29.8514C15.979 29.8515 15.9826 29.8515 15.9861 29.8515C16.0133 29.8515 16.0399 29.8496 16.0665 29.8474C16.3837 29.8355 16.6934 29.7482 16.97 29.5927L27.4701 23.6578C27.7782 23.4832 28.0345 23.2302 28.2129 22.9243C28.3913 22.6185 28.4855 22.2708 28.4859 21.9167V10.0837C28.4855 9.74047 28.3967 9.40311 28.2281 9.10415ZM15.9858 4.14889L25.4625 9.50527L22.122 11.4154L12.5714 6.07882L15.9858 4.14889ZM16.1128 14.8515L6.52695 9.49521L10.5331 7.23086L20.0956 12.5741L16.1128 14.8515ZM5.48585 11.2045L15.1124 16.5835L15.0018 27.2953L5.48585 21.9167L5.48585 11.2045ZM17.0022 27.2771L17.1126 16.5837L21.1277 14.2878V18.5641C21.1277 18.8293 21.233 19.0836 21.4206 19.2712C21.6081 19.4587 21.8625 19.5641 22.1277 19.5641C22.3929 19.5641 22.6473 19.4587 22.8348 19.2712C23.0223 19.0836 23.1277 18.8293 23.1277 18.5641V13.1442L26.4858 11.224V21.9167L17.0022 27.2771Z"
												fill="#4069E5"
											/>
										</svg>
									</div>

									<div className="text-green_dark1">
										<div className="text-[0.9rem]">Production Volume</div>
										<span className="text-[1.5rem] font-semibold">
											{productionVolume}kg
										</span>
									</div>
								</div>

								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width={117}
										height={58}
										viewBox="0 0 117 58"
										fill="none"
									>
										<path
											d="M116 1C116 1 97.7786 3.30465 87.25 8.35484C74.7786 14.3369 69.2234 19.5571 58.5 28.5806C46.2234 38.9112 42.5102 53.7553 29.75 56.74C19.5102 59.1352 1 42.0303 1 42.0303"
											stroke="#A0D900"
											strokeWidth={2}
										/>
									</svg>
								</div>
							</div>

							<hr />
							<div className="px-6 py-2">
								<div className="flex items-center space-x-2">
									<div className="flex items-center space-x-1 rounded-full bg-green_bright2 px-3 py-1 text-green_bright1">
										<i className="fa fa-arrow-up h-4 w-4"></i>
										<span className="text-[0.75rem]">25%</span>
									</div>
									<div className="text-[0.75rem] text-green_dark1">
										Total production compared to 7 days ago
									</div>
								</div>
							</div>
						</div>

						<div className="h-[150px] w-[48%] rounded-lg border">
							<div className="flex justify-between px-6 pb-4 pt-8">
								<div className="flex space-x-8">
									<div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={56}
											height={56}
											viewBox="0 0 32 32"
											fill="none"
											className="w rounded-full border border-[#F8A58C] bg-[#F8A58C1A] p-2"
										>
											<path
												d="M22.6665 5.33301H9.33317C7.86041 5.33301 6.6665 6.52691 6.6665 7.99967V25.333C6.6665 26.8058 7.86041 27.9997 9.33317 27.9997H22.6665C24.1393 27.9997 25.3332 26.8058 25.3332 25.333V7.99967C25.3332 6.52691 24.1393 5.33301 22.6665 5.33301Z"
												stroke="#FFD600"
												strokeWidth={2}
											/>
											<path
												d="M12 12H20M12 17.3333H20M12 22.6667H17.3333"
												stroke="#FFD600"
												strokeWidth={2}
												strokeLinecap="round"
											/>
										</svg>
									</div>

									<div className="text-green_dark1">
										<div className="text-[1rem]">Order Volume</div>
										<span className="text-[1.5rem] font-semibold">
											{orderVolume} orders
										</span>
									</div>
								</div>

								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width={94}
										height={59}
										viewBox="0 0 94 59"
										fill="none"
									>
										<path
											d="M93 58C93 58 78.9474 54.342 70 50.4C60.5474 46.2354 56.5375 39.3091 47 37.7333C38.1375 36.2691 30.7206 48.1668 24 42.8C12.3206 33.4734 0.999999 1 0.999999 1"
											stroke="#F07167"
											strokeWidth={2}
										/>
									</svg>
								</div>
							</div>

							<hr />
							<div className="px-6 py-2">
								<div className="flex items-center space-x-2">
									<div className="flex items-center space-x-1 rounded-full bg-[#F0716733] px-3 py-1 text-[#F07167]">
										<i className="fa fa-arrow-down h-4 w-4"></i>
										<span className="text-[0.75rem]">15%</span>
									</div>
									<div className="text-[0.75rem] text-green_dark1">
										Total order volume compared to 7 days ago
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Total
