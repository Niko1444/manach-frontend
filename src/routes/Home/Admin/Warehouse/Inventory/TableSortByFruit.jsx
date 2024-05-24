import React from 'react'

const TableSortByFruit = () => {
	return (
		<div style={{ padding: '1rem' }}>
			<table style={{ minWidth: '100%', borderCollapse: 'collapse', border: '1px solid #485935', }}>
				<thead>
					<tr>
						<th
							style={{
								border: '1px solid #485935',
								padding: '8px',
								textAlign: 'center',
								fontWeight: 'bold',
								width: '85px',
							}}
						></th>
						<th
							style={{
								border: '1px solid #485935',
								color: '#485935',
								fontSize: 20,
								fontFamily: 'Poppins',
								fontWeight: '500',
								wordWrap: 'break-word',
								textAlign: 'center',
								fontWeight: 'bold',
							}}
						>
							Name
						</th>
						<th
							style={{
								border: '1px solid #485935',
								color: '#485935',
								fontSize: 20,
								fontFamily: 'Poppins',
								fontWeight: '500',
								wordWrap: 'break-word',
								textAlign: 'center',
								fontWeight: 'bold',
							}}
						>
							Quantity in stock
						</th>
						<th
							style={{
								border: '1px solid #485935',
								color: '#485935',
								fontSize: 20,
								fontFamily: 'Poppins',
								fontWeight: '500',
								wordWrap: 'break-word',
								textAlign: 'center',
								fontWeight: 'bold',
							}}
						>
							Status
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td
							style={{
								padding: '8px',
								textAlign: 'center',
								borderLeft: '1px solid #485935',
								borderRight: '1px solid #485935',
							}}
						>
							<img src="https://s3-alpha-sig.figma.com/img/aea6/9e6d/d66f9691e82cae98df7f353bc35373e9?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZXmuGoy9u2bD65mic3km--LhQ7Ac9S4NcVIwNbYhz2Yt6830gos-qwBo1pppZVmNBhtD9KSixVDiLl6dRTqHCouspH4e8LKFwHSWRPbxaOWUChEo5qa1cnfokvkdUWCtgyBszVK32BoKe3YmNFYtl~F~Aa5WGik3S4QdkqztRy2s2jh1sxo0zCpqR~zU-sBpOKRm2EGBUHUm1oLkMQcUw6DmW-yZqO1R20p4JmSJEEnsRGs~NNQp8rvA77DLietI175xViSaKt5SDcbUtaEJkLuJ4JGhYvnAti4x-y1WzRqwMVdfh~WuOszmqKw6w5hztFVGdYXCImt5mABD8TWlZw__" />
						</td>
						<td
							style={{
								color: '#485935',
								fontSize: 20,
								fontFamily: 'Poppins',
								fontWeight: '400',
								wordWrap: 'break-word',
								textAlign: 'center',
								borderLeft: '1px solid #485935',
								borderRight: '1px solid #485935',
							}}
						>
							Cavendish Banana
						</td>
						<td
							style={{
								color: '#485935',
								fontSize: 20,
								fontFamily: 'Poppins',
								fontWeight: '400',
								wordWrap: 'break-word',
								textAlign: 'center',
								borderLeft: '1px solid #485935',
								borderRight: '1px solid #485935',
							}}
						>
							2
						</td>
						<td
							style={{
								color: '#FFD600',
								fontSize: 20,
								fontFamily: 'Poppins',
								fontStyle: 'italic',
								fontWeight: '900',
								wordWrap: 'break-word',
								textAlign: 'center',
							}}
						>
							Low stock
						</td>
					</tr>
					<tr>
						<td
							style={{
								padding: '8px',
								textAlign: 'center',
								borderLeft: '1px solid #485935',
								borderRight: '1px solid #485935',
							}}
						>
							<img src="https://s3-alpha-sig.figma.com/img/d788/ffc9/9f98dc9396793baa8448cebdd6613ce8?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=br4SuqN7qHONR78PecURjm5laRdVQoFD0Dy70agebgdUNBBeYiekfXBE0ASBnf~X4auz4Ucb252KtYmqu9YgLfIhrEw0l3oUSySlDgbiyRO85C5JSS7bsw5QSzuu-n0PTPnmw~sPkMSC~B82ZPuacA4k4zZtwqV73g6R1u~masKAcB87ztVU4amEapfhqlo7ZFQPYKggTxz32mjwI~0Suq0dS6vNSHZkQz5WyIIYsjBo0XIflmj-BbXRKkDDbitjo09YYegcSEA1nFPveD6AT~OilqRjG~hzwa41n5SeN0FV-tTFfGPiaX48P4wp4wGGn7qjix8x~dLG5ZKo87lbOg__" />
						</td>
						<td
							style={{
								color: '#485935',
								fontSize: 20,
								fontFamily: 'Poppins',
								fontWeight: '400',
								wordWrap: 'break-word',
								textAlign: 'center',
								borderLeft: '1px solid #485935',
								borderRight: '1px solid #485935',
							}}
						>
							Apple Banana
						</td>
						<td
							style={{
								color: '#485935',
								fontSize: 20,
								fontFamily: 'Poppins',
								fontWeight: '400',
								wordWrap: 'break-word',
								textAlign: 'center',
								borderLeft: '1px solid #485935',
								borderRight: '1px solid #485935',
							}}
						>
							8
						</td>
						<td
							style={{
								color: '#A0D900',
								fontSize: 20,
								fontFamily: 'Poppins',
								fontStyle: 'italic',
								fontWeight: '900',
								wordWrap: 'break-word',
								textAlign: 'center',
							}}
						>
							Near-low stock
						</td>
					</tr>
					<tr>
						<td
							style={{
								padding: '8px',
								textAlign: 'center',
								borderLeft: '1px solid #485935',
								borderRight: '1px solid #485935',
							}}
						>
							<img src="https://s3-alpha-sig.figma.com/img/c7bf/8801/bab3a9090cba9428a115cf9befd306cd?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=np7R~VhJUuoaWxMX8Cegx6Q311YK1i0yRv~TO9fUUvM~OnocoYUCZ~eS9RFR~cZMZCKyHdZK3bSQUzDrLSZjthyttpO6jIhlIRz3PJQ0Y28PfwykxFFJ2Sdnc4L26~RnLVfbjAn38nDiAcs588Dv-6tRshga89zPjY0hafkMqbFtiS1lY2CcB9xNslizGQ-VIMuHqaHpIQ1jNNrfxP9PdlCh6QzZSFE~NoONCnGW2p0wQqTOJ7xulQOaw17NPi9u07FGC3YTkCjvBJa1NTKcfz4sVI8a0DWX0ptB-1Tnwr4yyjxEDrpZJhPKSMq9WInMXWe5Zai2Y-ewaN47gFC7VQ__" />
						</td>
						<td
							style={{
								color: '#485935',
								fontSize: 20,
								fontFamily: 'Poppins',
								fontWeight: '400',
								wordWrap: 'break-word',
								textAlign: 'center',
								borderLeft: '1px solid #485935',
								borderRight: '1px solid #485935',
							}}
						>
							Goldfinger Banana
						</td>
						<td
							style={{
								color: '#485935',
								fontSize: 20,
								fontFamily: 'Poppins',
								fontWeight: '400',
								wordWrap: 'break-word',
								textAlign: 'center',
								borderLeft: '1px solid #485935',
								borderRight: '1px solid #485935',
							}}
						>
							11
						</td>
						<td
							style={{
								color: '#485935',
								fontSize: 20,
								fontFamily: 'Poppins',
								fontStyle: 'italic',
								fontWeight: '900',
								wordWrap: 'break-word',
								textAlign: 'center',
							}}
						>
							High-stock
						</td>
					</tr>
					<tr>
						<td
							style={{
								padding: '8px',
								textAlign: 'center',
								borderLeft: '1px solid #485935',
								borderRight: '1px solid #485935',
							}}
						>
							<img src="https://s3-alpha-sig.figma.com/img/d197/ec36/b2180696785f241f77278ceab35ded9a?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b2s04xla3VPyPrCq8qVUVjot0fuiqeurbLbNyM9bdXQBTUwvxbHOBw-MSuEdpTbyiordNRVaXV-4rwFvGu063ocaJEQEjBFxNdnGMwhPm27sm0bBLCDpPJYMKjeLlE0MOoW6OFJAoevzO7eroG4lEAwWSB4-geIouPNpu219eyq8dvd~pMD9iFe3B6uvY-KcKZqDoRghBYSeN2MvmIn5dqcP3RIOLJ6ZFmjCPcYWJPmGla0bGo1XN~uQLT1MWuT7GOFrtqD9Sy0c0Of2mhIsn8YadlVDYi1z5VBUImSIOmrwEcXCtnK3tuWaUrVHYIzhiRr--1kegUXuGaoUVeKBbQ__" />
						</td>
						<td
							style={{
								color: '#485935',
								fontSize: 20,
								fontFamily: 'Poppins',
								fontWeight: '400',
								wordWrap: 'break-word',
								textAlign: 'center',
								borderLeft: '1px solid #485935',
								borderRight: '1px solid #485935',
							}}
						>
							Red Banana
						</td>
						<td
							style={{
								color: '#485935',
								fontSize: 20,
								fontFamily: 'Poppins',
								fontWeight: '400',
								wordWrap: 'break-word',
								textAlign: 'center',
								borderLeft: '1px solid #485935',
								borderRight: '1px solid #485935',
							}}
						>
							3
						</td>
						<td
							style={{
								color: '#FFD600',
								fontSize: 20,
								fontFamily: 'Poppins',
								fontStyle: 'italic',
								fontWeight: '900',
								wordWrap: 'break-word',
								textAlign: 'center',
							}}
						>
							Low stock
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default TableSortByFruit
