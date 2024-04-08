import { useState } from 'react'
import './App.css'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<div className="flex min-h-screen flex-col items-center justify-center text-center">
				<h1 className="text-4xl font-bold">Hello World App!</h1>
				<p className="text-lg text-gray-500">
					Edit <code>App.jsx</code> and save to test HMR updates.
				</p>
				<p className="text-lg">
					<button
						className="bg-vite rounded-lg px-4 py-2 text-black shadow-md"
						onClick={() => setCount((count) => count + 1)}
					>
						count is: {count}
					</button>
				</p>
			</div>
		</>
	)
}

export default App
