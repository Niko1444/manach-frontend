import React from 'react'

const TopFruitDurian = () => {
	return (
		<div
			style={{
				width: '392px',
				height: '400px',
				background: 'white',
				margin: '10px',
				borderRadius: 10,
				overflow: 'hidden',
				border: '1px #DEE1E6 solid',
				flexDirection: 'column',
				justifyContent: 'flex-start',
				gap: '10px',
				display: 'inline-flex',
			}}
		>
			<img
				style={{ width: '392px', height: '240px' }}
				src="https://s3-alpha-sig.figma.com/img/cfab/21ec/f9342b1310068374cf6cff9b6e38d9b5?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YeiyOwpmtAoUFU5aLusuvjRN8qbCpjSTSizzqhuNhbDuUsKv6YAte7JsJjRDiTx333XzmwYqgIXl4A3qa3eKcEBmCFheg1Ld0VjGTHXshRMtmcZKd1sifIEin4i9Gm0Gp0nz9Uzy4kbdFCUjfCd7Z~Mkht139QtRyfWWQZPJrDBcBgAwmdbnPNkkLDS~LWIerC9Roj0QaJsMoHFamyv5-ml5oCFDHgXntcZGB6h5ge1YyQJu~n0Zwib~FaRKMrYRbQmtJAEYxAYUKlOgL~omzmWrwxYEBk1tYLQugaKTHyZZGmQ7irkJJ5q2qLlStzdCOC7Yne5aGE82GvdFFvvXbA__"
			/>
			<div className="flex">
				<div
					style={{
						color: '#2C3721',
						fontSize: 18,
						fontFamily: 'Poppins',
						fontWeight: '700',
						wordWrap: 'break-word',
						paddingLeft: '15px',
					}}
				>
					Durian
				</div>
				<div className="p-[6px]">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
					>
						<path
							d="M7.99945 1.56494C6.72674 1.56494 5.48258 1.94235 4.42437 2.64943C3.36613 3.35652 2.54134 4.36153 2.05429 5.53738C1.56724 6.71321 1.43981 8.00707 1.6881 9.25536C1.9364 10.5036 2.54927 11.6502 3.44922 12.5502C4.34919 13.4501 5.49578 14.063 6.74403 14.3113C7.99232 14.5596 9.28619 14.4322 10.462 13.9451C11.6379 13.458 12.6429 12.6333 13.35 11.575C14.0571 10.5168 14.4345 9.27265 14.4345 7.99994C14.4312 6.29427 13.7522 4.65942 12.5461 3.45333C11.34 2.24723 9.70512 1.56821 7.99945 1.56494ZM11.0623 6.87382L7.43641 10.3388C7.34265 10.427 7.21857 10.4757 7.08991 10.4749C7.02698 10.4758 6.96454 10.4643 6.90613 10.4409C6.84772 10.4176 6.79452 10.3828 6.74958 10.3388L4.93666 8.60632C4.88636 8.56246 4.84548 8.50887 4.8164 8.44877C4.78736 8.38871 4.77077 8.32337 4.76763 8.25671C4.76446 8.19005 4.77483 8.12346 4.79806 8.06089C4.82132 7.99836 4.85696 7.94114 4.90286 7.89272C4.9488 7.84428 5.00404 7.80567 5.06526 7.77914C5.12651 7.75261 5.19247 7.73871 5.2592 7.73832C5.32593 7.73795 5.39206 7.75105 5.45357 7.77686C5.51511 7.8027 5.57078 7.84068 5.61728 7.88857L7.08991 9.29311L10.3817 6.15607C10.4779 6.07208 10.6029 6.02859 10.7305 6.03463C10.858 6.04067 10.9784 6.09578 11.0662 6.18847C11.1542 6.28114 11.2028 6.40419 11.2021 6.53194C11.2013 6.65968 11.1512 6.78218 11.0623 6.87382Z"
							fill="#F07167"
							fill-opacity="0.5"
						/>
					</svg>
				</div>
			</div>
			<div
				style={{
					color: '#93A267',
					fontSize: 14,
					fontFamily: 'Poppins',
					fontWeight: '400',
					wordWrap: 'break-word',
					paddingLeft: '15px',
				}}
			>
				The tropical fruit durian, which has a pungent smell and a husk covered
				in thorns, is prized for its sweet taste, velvety texture, and plenty of
				vitamins, minerals, and good fats.
			</div>
		</div>
	)
}

export default TopFruitDurian
