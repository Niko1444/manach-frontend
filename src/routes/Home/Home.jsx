import Embracing from '../../components/EmbracingFood/Embracing'
import Introduction from '../../components/Introduction/Introduction'
import Together from '../../components/Together/Together'
import Footer from './Footer'
import HowToUse from './HowToUse'

function Home() {
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
