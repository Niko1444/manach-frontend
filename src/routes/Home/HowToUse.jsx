// src/App.js
import React from 'react';
import image from '../../assets/nexttogrid.jpeg'

function App() {
	const containerStyle = {
		display: 'flex',
		height: '644px', // full viewport height
	};

	const gridContainerStyle = {
		display: 'grid',
		gridTemplateColumns: 'repeat(2, 1fr)', // 2 columns
		gridTemplateRows: 'repeat(4, 1fr)', // 4 rows including the additional title row
		gap: '0', // no gap, we'll use borders instead
		padding: '10px',
		flex: 1, // takes up half of the flex container
	};

	const gridItemStyle = {
		backgroundColor: '#FFF',
		color: '#485935',
		padding: '10px',
		textAlign: 'left',
    padding: '40px 20px 20px 40px',
		border: '0.2px solid black', // black border for grid lines
    fontFamily: 'Poppins, sans-serif',
	};

	const titleStyle = {
		gridColumn: '1 / span 2', // span across two columns
		backgroundColor: '#FFF',
		color: '#485935',
		padding: '30px 0 0 0',
		textAlign: 'center',
		border: 'none', // no border for the title
    fontSize: '50px',
    fontWeight: 700,
    fontFamily: 'Poppins, sans-serif',
	};

	const imageContainerStyle = {
		flex: 1, // takes up half of the flex container
		overflow: 'hidden', // hide overflowing parts of the image
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f0f0f0',
	};

	const imageStyle = {
		maxWidth: '100%',
		maxHeight: '100%',
		transform: 'scale(1.6)', // Scale the image by 1.5 times
	};

	return (
		<div style={containerStyle}>
			<div style={gridContainerStyle}>
				<div style={titleStyle}>How to use Manach?</div>
				<div style={gridItemStyle}>Step 1: Set yourself up to welcome the natural vitamins that are waiting for you.</div>
				<div style={gridItemStyle}>Step 2: To comprehend our offers, read and study Manach.</div>
				<div style={gridItemStyle}>Step 3: Go to our web store and peruse the assortment of fruits we have offered.</div>
				<div style={gridItemStyle}>Step 4:  Fill your shopping cart with the fruits you've selected.</div>
				<div style={gridItemStyle}>Step 5: Complete your purchase by going to the checkout.</div>
				<div style={gridItemStyle}>Step 6: Unwind as you sit back and wait for your fresh fruits to arrive.</div>
			</div>
			<div style={imageContainerStyle}>
				<img
					src={image} // Use your local image here
					alt="image"
					style={imageStyle}
				/>
			</div>
		</div>
	);
}

export default App;
