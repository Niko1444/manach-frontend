
import React from 'react'

import Footer from './Footer'

import AtManach from '../../components/AtManach/AtManach'
import Carousel from './Carousel'
import Header from './Header'
import WhatSetsUsApart from '../../components/WhatSetsUs/WhatSetsUsApart'

const AboutUs = () => {
	return (
		<div className="bg-white">
			<Header />
			<Carousel />
      <AtManach/>
      <WhatSetsUsApart/>
      <Footer/>	
		</div>
	)
}

export default AboutUs
