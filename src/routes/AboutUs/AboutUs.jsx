import Footer from './Footer'
import AtManach from './AtManach'

import Carousel from './Carousel'
import Header from './Header'
import WhatSetsUsApart from '../../components/WhatSetsUs/WhatSetsUsApart'
import { useEffect } from 'react'

const AboutUs = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className="bg-white">
			<Header />
			<Carousel />
			<AtManach />
			<WhatSetsUsApart />
			<Footer />
		</div>
	)
}

export default AboutUs
