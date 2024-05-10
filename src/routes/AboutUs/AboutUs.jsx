
import React from 'react'
import Footer from './Footer'

import AtManach from '../../components/AtManach/AtManach'
import Carousel from './Carousel'
import Header from './Header'

const AboutUs = () => {
	return (
		<div className="bg-white">
			<Header />
			<Carousel />
      <AtManach/>
      <Footer/>	
		</div>
	)
}

export default AboutUs
