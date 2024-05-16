import React from 'react'

const Together = () => {
	return (
			<div
				style={{
					width: '80%',
					height: '80%',
					position: 'relative',
					background: '#485935',
					borderRadius: 8,
					marginTop:'100px'
				}}
			>
				<div style={{ display: 'grid' }}>
					<div
						style={{
							left: 33,
							top: 35,
							position: 'absolute',
							color: 'white',
							fontSize: 48,
							fontFamily: 'Poppins',
							fontWeight: '400',
							wordWrap: 'break-word',
						}}
					>
						Together, let's explore!
					</div>

					{/* Subtitle */}
					<div
						style={{
							width: 503,
							left: 62,
							top: 134,
							position: 'absolute',
							color: 'white',
							fontSize: 18,
							fontFamily: 'Poppins',
							fontWeight: '400',
							wordWrap: 'break-word',
						}}
					>
						Unlock a World of Freshness at Manach: Where Every Bite Brings You
						Closer to Nature's Bounty!
						
					</div>
					<img
						src="https://s3-alpha-sig.figma.com/img/249c/567f/cbc1afc78693975f1d312991c976662b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nRep07u-z8gv9W0gB5ozcRUOuG3h8328j0Pli9IcaUe-ClCCbOttomI~HHuBLUIRz2pRxMPfTutNC7CrFdSxLf7z76OV3DOuI4pmY2A47bTRt~FgcG1aJDNl25cTWRjwsMCDx5oDbFhWqzj5h0GJscj9rvNmLdXOLKA7myrrCRJnHYewNzC3JGOvl4PwKO-DsPfx20oZKhN50a~-s5xrTtLhLgiostRTLboeaiC3j-PMsYnJVigy7K6NJoRnH6W1V6TphKouv-Cy7hCVlEJj7CD4aL33lo7KoA96bmbLxb0r7FNdgD7ZzBmFD1nwISQW2AXzglFOd-~lm6NZILcg~A__"
						alt="Freshness Image"
						style={{
							width: '250px',
							height: 'auto',
							borderRadius: '8px',
							left:200,
							marginTop: '20px', 
							position: 'relative',
							left: '700px'
						}}
					/>
				</div>
			</div>
	)
}

export default Together

