import React from 'react'
import YesPleasecheck from '../YesPleasecheck'

const ErrorReport = () => {
	return (
		<div
			style={{
				width: '664px',
				height: '403px',
				position: 'relative',
				background: 'white',
				borderRadius: 15,
				overflow: 'hidden',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div style={{ width: 48, height: 48, marginTop: -160 }}>
				{/* SVG Image */}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="43"
					height="43"
					viewBox="0 0 43 43"
					fill="#F07167"
				>
					<path
						d="M23.0837 4.53653C22.4638 3.36478 20.536 3.36478 19.9161 4.53653L3.79105 34.9949C3.6459 35.2679 3.57394 35.5738 3.58218 35.8829C3.59042 36.192 3.67859 36.4936 3.83809 36.7585C3.99759 37.0234 4.22298 37.2424 4.49231 37.3943C4.76163 37.5461 5.0657 37.6256 5.37489 37.625H37.6249C37.9339 37.6257 38.2377 37.5462 38.5069 37.3945C38.776 37.2427 39.0012 37.0238 39.1606 36.7591C39.3199 36.4943 39.4079 36.1928 39.4161 35.884C39.4242 35.5751 39.3521 35.2694 39.2069 34.9967L23.0837 4.53653ZM23.2916 32.25H19.7082V28.6667H23.2916V32.25ZM19.7082 25.0834V16.125H23.2916L23.2933 25.0834H19.7082Z"
						stroke="#F07167"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</div>
			<div
				style={{
					position: 'absolute',
					top: '20px',
					left: '20px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					width: 103,
					height: 52.27,
					borderRadius: 15,
					border: '1px solid #485935',
				}}
			>
				<div
					style={{
						textAlign: 'center',
						color: '#485935',
						fontSize: 21,
						fontFamily: 'Poppins',
						fontWeight: '300',
						wordWrap: 'break-word',
					}}
				>
					Back
				</div>
			</div>
			<div
				style={{
					textAlign: 'center',
					color: '#485935',
					fontSize: 26,
					fontFamily: 'Poppins',
					fontWeight: '600',
					wordWrap: 'break-word',
					marginTop: 20,
				}}
			>
				Website Error Report
			</div>
			<div
				style={{
					width: 389,
					textAlign: 'center',
					color: '#485935',
					fontSize: 20,
					fontFamily: 'Poppins',
					fontWeight: '275',
					wordWrap: 'break-word',
					marginTop: 20,
				}}
			>
				Have you noticed a problem with this page and want to report an error?
			</div>
			<div>
				<YesPleasecheck/>
			</div>
		</div>
	)
}

export default ErrorReport
