import React from 'react'

import AtManach from '../../components/AtManach/AtManach'
import Carousel from './Carousel'
import Header from './Header'


const AboutUs = () => {
	return (
		<div className="bg-white">
			<Header />
			<Carousel />
			<AtManach />
		</div>
	)
}

export default AboutUs
