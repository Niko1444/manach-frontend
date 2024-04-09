import { useState } from 'react'
import HelloWorld from './HelloWorld'
import Menu from '../../components/Menu'

function Home() {
	return (
		<div className="flex flex-row items-center justify-center">
			<Menu />
			<HelloWorld />
		</div>
	)
}

export default Home
