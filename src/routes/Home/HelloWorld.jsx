// Path: src/routes/Client/Home/HelloWorld.jsx
import { useState } from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
function HelloWorld() {
	const [count, setCount] = useState(0)

	return (
		<>
			<div className="justify-centerflex flex h-full w-3/4 flex-grow flex-col items-center justify-center">
				<h1 className="text-4xl font-bold">Hello World App!</h1>
				<p className="text-lg text-gray-500">
					Edit <code>App.jsx</code> and save to test HMR updates.
				</p>
				<p className="py-4 text-lg">
					<button
						className="rounded-lg bg-slate-50 px-4 py-2 text-green-400 shadow-md"
						onClick={() => setCount((count) => count + 1)}
					>
						count is: {count}
					</button>
				</p>
				<SearchBar/>
			</div>
		</>
	)
}

export default HelloWorld
