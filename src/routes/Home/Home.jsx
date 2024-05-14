import Embracing from '../../components/EmbracingFood/Embracing'
import HelloWorld from './HelloWorld'

import Footer from './Footer'
import HowToUse from './HowToUse'

import Introduction from '../../components/Introduction/Introduction'

function Home() {
	return (
		<div>
			<HelloWorld />
      <Introduction />
      <HowToUse/>
		  <Footer/>
		</div>
	)
}

export default Home
