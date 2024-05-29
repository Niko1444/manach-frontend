import Embracing from './Embracing'
import Introduction from './Introduction'
import Together from './Together'
import Footer from './Footer'
import HowToUse from './HowToUse'
import { useEffect } from 'react'

function Home() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<Introduction />
			<Embracing />
			<Together />
			<HowToUse />
			<Footer />
		</div>
	)
}

export default Home
