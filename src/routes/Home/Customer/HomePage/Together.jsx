const Together = () => {
	return (
		<div className="flex justify-center">
			<div
				className="mt-24"
				style={{
					width: '80%',
					position: 'relative',
					background: '#485935',
					borderRadius: 8,
				}}
			>
				<div className="m-12 flex">
					<div className="w-[60%] text-offwhite">
						<div
							className="mb-4"
							style={{
								fontSize: '2.5rem',
								fontWeight: 400,
								lineHeight: '4.25rem' /* 141.667% */,
							}}
						>
							Together, let's explore!
						</div>
						<span className="w-[31.4375rem] text-[1.2rem]">
							Unlock a World of Freshness at Manach: Where Every Bite Brings You
							Closer to Nature's Bounty!
						</span>
					</div>

					<div className="w-[40%]">
						<img
							className="mx-auto rounded-full bg-offwhite"
							style={{
								height: '8rem',
								width: '8rem',
							}}
							src="/src/assets/sumbol.png"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Together
