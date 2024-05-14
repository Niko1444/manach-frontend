// src/App.js
import image from '../../assets/nexttogrid.jpeg'

function App() {
	const containerStyle = {
		display: 'flex',
		height: '644px',
		backgroundColor: '#F8F9FA',
	}

	const gridContainerStyle = {
		display: 'grid',
		gridTemplateColumns: 'repeat(2, 1fr)',
		gridTemplateRows: 'repeat(4, 1fr)',
		padding: '10px',
		flex: 1,
	}

	const gridItemStyle = {
		color: '#485935',
		textAlign: 'left',
		padding: '40px 20px 20px 40px',
		border: '0.2px solid black',
		fontFamily: 'Poppins, sans-serif',
	}

	const titleStyle = {
		gridColumn: '1 / span 2',
		padding: '30px 0 0 0',
		textAlign: 'center',
		fontSize: '50px',
		fontWeight: 700,
		fontFamily: 'Poppins, sans-serif',
	}

	const imageContainerStyle = {
		flex: 1,
		overflow: 'hidden',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f0f0f0',
	}

	const imageStyle = {
		maxWidth: '100%',
		maxHeight: '100%',
		transform: 'scale(1.6)',
	}

	return (
		<div style={containerStyle} className="my-24">
			<div style={gridContainerStyle}>
				<div style={titleStyle}>How to use Manach?</div>
				<div style={gridItemStyle}>
					Step 1: Set yourself up to welcome the natural vitamins that are
					waiting for you.
				</div>
				<div style={gridItemStyle}>
					Step 2: To comprehend our offers, read and study Manach.
				</div>
				<div style={gridItemStyle}>
					Step 3: Go to our web store and peruse the assortment of fruits we
					have offered.
				</div>
				<div style={gridItemStyle}>
					Step 4: Fill your shopping cart with the fruits you've selected.
				</div>
				<div style={gridItemStyle}>
					Step 5: Complete your purchase by going to the checkout.
				</div>
				<div style={gridItemStyle}>
					Step 6: Unwind as you sit back and wait for your fresh fruits to
					arrive.
				</div>
			</div>
			<div style={imageContainerStyle}>
				<img
					src={image} // Use your local image here
					alt="image"
					style={imageStyle}
				/>
			</div>
		</div>
	)
}

export default App
