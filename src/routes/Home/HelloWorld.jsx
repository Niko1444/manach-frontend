// Path: src/routes/Client/Home/HelloWorld.jsx
import { useState } from 'react'
import Embracing from '../../components/EmbracingFood/Embracing'
import Together from '../../components/Together/Together'

function HelloWorld() {
	return (
		<>
			<div className="flex h-full flex-grow flex-col items-center justify-center ">
				<Embracing/>
				<Together/>
			</div>
		</>
	)
}

export default HelloWorld
