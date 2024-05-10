const Carousel = () => {
	return (
		<div className="relative mt-[20px] w-full">
			<div className="ml-[23.31rem] w-[27.125rem] text-center">
				<div className="h-[21.1875rem]  text-center">
					<span
						style={{
							color: 'var(--Green-dark1, #485935)',
							textAlign: 'center',
							fontSize: '4.6875rem',
							fontStyle: 'normal',
							fontWeight: 800,
						}}
					>
						WELLCOME TO MANACH!
					</span>
				</div>
				<div
					style={{
						borderRadius: '0.625rem',
						background: 'var(--Green, #93A267)',
						width: '17.375rem',
						margin: 'auto',
					}}
				>
					<span
						style={{
							color: 'var(--Green-dark1, #485935)',
							textAlign: 'center',
							fontSize: '1.25rem',
							fontStyle: 'normal',
							fontWeight: 500,
							lineHeight: 'normal',
						}}
					>
						LET'S EXPLORE OUR STORE
					</span>
				</div>
			</div>

			<img
				className="absolute right-0 top-3/4"
				src="/src/assets/2a 1.png"
				alt=""
				style={{
					width: '41.36819rem',
					height: '21.88319rem',
					clipPath: 'inset(0 0% 9% 0)',
				}}
			/>
			<img
				className="absolute left-0 top-3/4"
				src="/src/assets/2b 2.png"
				alt=""
				style={{
					width: '28.75rem',
					height: '28.4375rem',
					clipPath: 'inset(0 0 30% 0)',
				}}
			/>
		</div>
	)
}

export default Carousel
