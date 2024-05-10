import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

// Import Pages
import Home from './routes/Home/Home'
import Setting from './routes/Setting/Setting'
import Layout from './components/Layout'
import AboutUs from './routes/AboutUs/AboutUs'

// Import Not Found Page
import NotFound from './routes/NotFound'

function App() {
	// eslint-disable-next-line no-unused-vars
	const [count, setCount] = useState(0)

	return (
		<Layout>
			<Routes>
				<Route path="about-us" element={<AboutUs/>} />

				{/* All main pages */}
				<Route path="/" element={<Home />} />

				{/* About */}
				<Route path="/setting" element={<Setting />} />

				{/* Error pages */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Layout>
	)
}

export default App
