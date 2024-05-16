import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

// Import Pages
import Home from './routes/Home/Customer/HomePage/Home'
import Setting from './routes/Setting/Setting'
import Layout from './components/Layout'
import AboutUs from './routes/AboutUs/AboutUs'

// Import Not Found Page
import NotFound from './routes/NotFound'
import AuthTemplate from './routes/Auth/AuthTemplate'
import Welcome from './routes/Auth/Welcome'
import Login from './routes/Auth/Login'
import Signup from './routes/Auth/Signup'
import CusStore from './routes/Home/Customer/Store/CusStore'
import CusOrder from './routes/Home/Customer/Order/CusOrder'
import CustomerTemplate from './routes/Home/Customer/CustomerTemplate'
import CusCheckOut from './routes/Home/Customer/CheckOut/CusCheckOut'
import CusSetting from './routes/Home/Customer/Setting.jsx/CusSetting'

function App() {
	// eslint-disable-next-line no-unused-vars
	const [count, setCount] = useState(0)

	return (
		<Layout>
			<Routes>
				<Route path="about-us" element={<AboutUs />} />

				{/* All main pages */}
				<Route path="customer" element={<CustomerTemplate />}>
					<Route path="home" element={<Home />} />
					<Route path="store" element={<CusStore />} />
					<Route path="order" element={<CusOrder />} />
					<Route path="check-out" element={<CusCheckOut />} />
					<Route path="setting" element={<CusSetting />} />
				</Route>

				{/* Auth */}
				<Route path="auth" element={<AuthTemplate />}>
					<Route path="welcome" element={<Welcome />} />
					<Route path="login" element={<Login />} />
					<Route path="signup" element={<Signup />} />
				</Route>

				{/* About */}
				<Route path="/setting" element={<Setting />} />

				{/* Error pages */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Layout>
	)
}

export default App
