import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

// Import Pages
import Home from './routes/Home/Home'
import Setting from './routes/Setting/Setting'

// Import Not Found Page
import NotFound from './routes/NotFound'

function App() {
	const [count, setCount] = useState(0)

	return (
		<Routes>
			{/* All main pages */}
			<Route path="/" element={<Home />} />

			{/* About */}
			<Route path="/setting" element={<Setting />} />

			{/* Error pages */}
			<Route path="*" element={<NotFound />} />
		</Routes>
	)
}

export default App
